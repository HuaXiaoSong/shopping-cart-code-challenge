import { configureStore } from "@reduxjs/toolkit"
import cartReducer, {
  addProductToCart,
  clearCart,
  removeCartItem,
  toggleCart,
} from "./cartSlice"

describe("cartSlice reducers", () => {
  let store: any
  const initialState: any = {
    cartItems: [
      { product: { id: 1, name: "Product A", price: 9.99 }, quantity: 2 },
      { product: { id: 2, name: "Product B", price: 14.99 }, quantity: 1 },
    ],
    totalAmount: 34.97,
    totalProductCount: 3,
    open: false,
  }
  beforeEach(() => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
      preloadedState: { cart: initialState },
    })
  })

  it("should add a product to the cart", () => {
    store = configureStore({
      reducer: {
        cart: cartReducer,
      },
    })
    const payload = {
      product: { id: 1, name: "Product A", price: 9.99 },
      count: 2,
    }

    store.dispatch(addProductToCart(payload))

    const newState = store.getState().cart

    expect(newState.cartItems.length).toBe(1)
    expect(newState.cartItems[0].product.id).toBe(1)
    expect(newState.cartItems[0].quantity).toBe(2)
    expect(newState.totalAmount).toBeCloseTo(19.98)
    expect(newState.totalProductCount).toBe(2)
  })

  it("should clear the cart", () => {
    store.dispatch(clearCart())

    const newState = store.getState().cart

    expect(newState.cartItems.length).toBe(0)
    expect(newState.totalAmount).toBe(0)
    expect(newState.totalProductCount).toBe(0)
  })

  it("should remove a cart item", () => {
    const payload = {
      product: { id: 1, name: "Product A", price: 9.99 },
    }

    store.dispatch(removeCartItem(payload))

    const newState = store.getState().cart

    expect(newState.cartItems.length).toBe(1)
    expect(newState.cartItems[0].product.id).toBe(2)
    expect(newState.totalAmount).toBeCloseTo(14.99)
    expect(newState.totalProductCount).toBe(1)
  })

  it("should toggle the cart", () => {
    const payload = {
      open: true,
    }

    store.dispatch(toggleCart(payload))

    const newState = store.getState().cart

    expect(newState.open).toBe(true)
  })
})
