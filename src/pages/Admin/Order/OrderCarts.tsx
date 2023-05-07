import React from "react"
import { Order } from "../../../interfaces/Order"
import CartItemTable from "./CartItemTable"

export interface Props {
  order: Order
}

export function OrderCarts({ order }: Props) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg text-lg">
      <div className="mb-2">
        <span className="font-semibold">First Name:</span> {order.firstName}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Last Name:</span> {order.lastName}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Email:</span> {order.email}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Total:</span> {order.totalAmount}
      </div>

      <CartItemTable cartItems={order.cartItems || []} />
    </div>
  )
}
