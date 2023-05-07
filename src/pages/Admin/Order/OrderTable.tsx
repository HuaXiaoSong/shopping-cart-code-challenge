import React from "react";
import { Button, Table } from "antd";
import { Order } from "../../../interfaces/Order";

export interface Props {
  orders: Order[];
  onEdit: (order: Order) => void;
}

const OrderTable = ({ orders, onEdit }: Props) => {
  const columns = [
    { title: "First Name", dataIndex: "firstName", key: "firstname" },
    { title: "Last Name", dataIndex: "lastName", key: "lastname" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Customer", dataIndex: "username", key: "username" },
    {
      title: "Action",
      key: "actions",
      render: (_: any, record: Order) => (
        <Button
          className="bg-blue-500"
          type="primary"
          onClick={() => onEdit(record)}
        >
          View Carts
        </Button>
      ),
    },
  ];

  return (
    <Table dataSource={orders} columns={columns} pagination={{ pageSize: 12 }} />
  );
};

export default OrderTable;
