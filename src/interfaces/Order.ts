import { CartItem } from "../pages/Cart/cartSlice"

export interface Order {
  id?: string
  username: string
  firstName: string
  lastName: string
  email: string
  totalAmount?: string
  totalProductAmount?: string
  cartItems?: CartItem[]
}
