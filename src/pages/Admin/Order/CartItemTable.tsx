import React from "react"
import { Table } from "antd"
import { CartItem } from "../../Cart/cartSlice"

export interface Props {
  cartItems: CartItem[]
}

const CartItemTable = ({ cartItems }: Props) => {
  const columns = [
    {
      title: "Product Name",
      key: "productName",
      render: (_: any, record: CartItem) => <div>{record.product.name}</div>,
    },
    {
      title: "Product SKU",
      key: "productSKU",
      render: (_: any, record: CartItem) => <div>{record.product.sku}</div>,
    },
    { title: "quantity", dataIndex: "quantity", key: "quantity" },
  ]

  return (
    <Table dataSource={cartItems} columns={columns} pagination={{ pageSize: 12 }} />
  )
}

export default CartItemTable
