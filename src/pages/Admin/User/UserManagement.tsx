import React, { useEffect, useState } from "react"
import { Modal } from "antd"
import { UserCarts } from "./UserCarts"
import { useAppDispatch } from "../../../app/hooks"
import { toggleCart } from "../../Cart/cartSlice"
import { getUsers } from "../../../mock/users"
import UserTable from "./UserTable"
import { User } from "../../../interfaces/User"

export function UserManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const [users, setUsers] = useState<User[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const fetchUsers = () => {
    getUsers().then((users) => {
      // @ts-ignore
      setUsers(users)
    })
  }

  useEffect(() => {
    dispatch(toggleCart(false))
    fetchUsers()
  }, [])

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const editUser = (user: User) => {
    setIsModalOpen(true)
    setSelectedUser(user)
  }

  return (
    <>
      <UserTable users={users} onEdit={editUser} />
      {isModalOpen && (
        <Modal
          title="Edit User"
          open={isModalOpen}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <UserCarts user={selectedUser} />
        </Modal>
      )}
    </>
  )
}
