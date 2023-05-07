import React, { useEffect, useState } from "react"
import { Modal } from "antd"
import { OrderCarts } from "./OrderCarts"
import { useAppDispatch } from "../../../app/hooks"
import { toggleCart } from "../../Cart/cartSlice"
import OrderTable from "./OrderTable"
import { Order } from "../../../interfaces/Order"
import { getOrders } from "../../../mock/cart"

export function OrderManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const [orders, setOrders] = useState<Order[]>([])
  const [selectedOrder, setSelectedOrder] = useState<Order>()

  const fetchOrders = () => {
    getOrders().then((orders) => {
      // @ts-ignore
      setOrders(orders)
    })
  }

  useEffect(() => {
    dispatch(toggleCart(false))
    fetchOrders()
  }, [])

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const editOrder = (order: Order) => {
    setIsModalOpen(true)
    setSelectedOrder(order)
  }

  return (
    <>
      <OrderTable orders={orders} onEdit={editOrder} />
      {isModalOpen && (
        <Modal
          width={"50%"}
          title="Order Detail"
          open={isModalOpen}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {selectedOrder && <OrderCarts order={selectedOrder} />}
        </Modal>
      )}
    </>
  )
}
