import { CartItem } from "../pages/Cart/cartSlice"
import { Order } from "../interfaces/Order"

export function getCarts() {
  const carts = JSON.parse(localStorage.getItem("CARTS") || "")
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(carts)
    }, 500)
  })
}

export function saveCarts(carts: CartItem[]) {
  localStorage.setItem("CARTS", JSON.stringify(carts))
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export function saveOrder(order: Order) {
  const carts = JSON.parse(localStorage.getItem("CARTS") || "")
  const existingOrders = localStorage.getItem("ORDERS")
    ? JSON.parse(localStorage.getItem("ORDERS") || "")
    : []
  const orders = [
    ...existingOrders,
    {
      ...order,
      ...carts,
    },
  ]
  localStorage.setItem("ORDERS", JSON.stringify(orders))
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export const getOrderByUser = (username: string) => {
  let userOrders: Order[] = []
  const ordersString = localStorage.getItem("ORDERS") || "[]"
  const orders = JSON.parse(ordersString)
  if (orders && orders.length > 0) {
    userOrders = orders.filter((o: Order) => o.username == username)
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userOrders)
    }, 500)
  })
}

export const getOrders = () => {
  const ordersString = localStorage.getItem("ORDERS") || "[]"
  const orders = JSON.parse(ordersString)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(orders)
    }, 500)
  })
}
