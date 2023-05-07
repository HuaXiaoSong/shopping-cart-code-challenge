import React, { useEffect, useState } from "react"
import { getOrderByUser } from "../../../mock/cart"

export interface Props {
  user: any
}

export function UserCarts({ user }: Props) {
  const [orders, setOrders] = useState<any>()
  useEffect(() => {
    getOrderByUser(user.username).then((orders) => {
      setOrders(orders)
    })
  }, [user])
  console.log(orders)
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {orders?.length > 0 &&
        orders.map((order: any) => {
          return (
            <div>
              <p className="mb-2">
                <span className="font-semibold">Order ID:</span> {order.id}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Order Date:</span> {order.date}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Total Amount:</span>{" "}
                {order.totalAmount}
              </p>

              <h3 className="text-xl font-bold mt-4 mb-2">Cart Items</h3>
              <ul>
                {order.carts?.map((item: any) => (
                  <li key={item.id} className="mb-4">
                    <p className="mb-2">
                      <span className="font-semibold">Product Name:</span>{" "}
                      {item.name}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Quantity:</span>{" "}
                      {item.quantity}
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold">Price:</span> {item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
    </div>
  )
}
