import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import cartReducer, {
  addProductToCart,
  CartState,
  clearCart,
  removeCartItem,
} from "../pages/Cart/cartSlice"

export interface State {
  cart: CartState
}

const localStorageMiddleware = ({ getState }: any) => {
  //simulate store cart to backend API
  return (next: any) => (action: any) => {
    const result = next(action)
    if (
      addProductToCart.match(action) ||
      clearCart.match(action) ||
      removeCartItem.match(action)
    ) {
      console.log(getState().cart)
      localStorage.setItem("CARTS", JSON.stringify(getState().cart))
    }
    return result
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem("CARTS") !== null) {
    const state = { cart: JSON.parse(localStorage.getItem("CARTS") || "") }
    state.cart.open = false
    if (!state.cart?.cartItems || state.cart?.cartItems?.length === 0) {
      state.cart.totalAmount = 0
      state.cart.totalProductCount = 0
    }
    return state
  }
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(localStorageMiddleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
