import React from "react"
import { Button, Table } from "antd"
import { Product } from "../../../interfaces/Product"

export interface Props {
  products: Product[]
  onEdit: (product: Product) => void
}

const ProductTable = ({ products, onEdit }: Props) => {
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "SKU", dataIndex: "sku", key: "sku" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Product) => (
        <Button
          className="bg-blue-500"
          type="primary"
          onClick={() => onEdit(record)}
        >
          Edit
        </Button>
      ),
    },
  ]

  return (
    <Table dataSource={products} columns={columns} pagination={{ pageSize: 12 }} />
  )
}

export default ProductTable
