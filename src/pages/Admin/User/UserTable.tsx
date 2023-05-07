import React from "react"
import { Button, Table } from "antd"
import { User } from "../../../interfaces/User"

export interface Props {
  users: User[]
  onEdit: (user: User) => void
}

const UserTable = ({ users, onEdit }: Props) => {
  const columns = [
    { title: "UserName", dataIndex: "username", key: "username", width: "90%" },
    {
      title: "Action",
      key: "actions",
      render: (_: any, record: User) => (
        <Button
          className="bg-blue-500"
          type="primary"
          onClick={() => onEdit(record)}
        >
          View Carts
        </Button>
      ),
    },
  ]

  return <Table dataSource={users} columns={columns} pagination={{ pageSize: 12 }} />
}

export default UserTable
