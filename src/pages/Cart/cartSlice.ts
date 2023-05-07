import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../interfaces/Product"
import { State } from "../../app/store"
import { getCarts } from "../../mock/cart"
import Decimal from "decimal.js"

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartState {
  cartItems: CartItem[]
  totalAmount: number
  totalProductCount: number
  open: boolean
}

const initialState: CartState = {
  cartItems: [],
  totalProductCount: 0,
  totalAmount: 0,
  open: false,
}

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      const resp = await getCarts()
      return resp
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong")
    }
  }
)

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.product.id === payload.product.id
      )
      if (cartItem) {
        cartItem.quantity =
          cartItem.quantity + payload.count > 0
            ? cartItem.quantity + payload.count
            : 0
      } else {
        state.cartItems = [
          ...state.cartItems,
          {
            product: payload.product,
            quantity: payload.count,
          },
        ]
      }

      state.totalAmount = +state.cartItems
        .reduce((total: any, item) => {
          const mul = new Decimal(item.product.price).mul(item.quantity)
          return new Decimal(mul).plus(total)
        }, 0)
        .toString()

      state.totalProductCount = state.cartItems.reduce(
        (total, item) => item.quantity + total,
        0
      )
    },
    clearCart: (state) => {
      state.cartItems = []
      state.totalAmount = 0
      state.totalProductCount = 0
    },
    removeCartItem: (state, action) => {
      const itemId = action.payload.product.id
      state.cartItems = state.cartItems.filter(
        (item) => +item.product.id !== +itemId
      )
      state.totalAmount = +state.cartItems
        .reduce((total: any, item) => {
          const mul = new Decimal(item.product.price).mul(item.quantity)
          return new Decimal(mul).plus(total)
        }, 0)
        .toString()

      state.totalProductCount = state.cartItems.reduce(
        (total, item) => item.quantity + total,
        0
      )
    },
    toggleCart: (state, { payload }) => {
      state.open = payload.open
    },
  },
  extraReducers: (builder) => {
    return {
      // @ts-ignore
      [getCartItems.pending]: (state) => {
        state.isLoading = true
      },
      // @ts-ignore
      [getCartItems.fulfilled]: (state, action) => {
        state.isLoading = false
        state.cartItems = action.payload
      },
      // @ts-ignore
      [getCartItems.rejected]: (state, action) => {
        state.isLoading = false
      },
    }
  },
})

export const { addProductToCart, clearCart, removeCartItem, toggleCart } =
  cartSlice.actions
export default cartSlice.reducer

export const selectSelf = (state: State) => state
export const selectCartState = createSelector(selectSelf, (state) => state.cart)
