import React from "react"
import Modal from "../../components/Modal/Modal"
import CartRow from "./CartRow"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { CartItem, selectCartState, toggleCart } from "./cartSlice"

const CartModal = () => {
  const dispatch = useAppDispatch()
  const { open, cartItems, totalAmount, totalProductCount } =
    useSelector(selectCartState)
  const total = `$${totalAmount.toFixed(2)}`
  const modalTop = () => {
    return (
      <div className="flex my-4">
        <div className="m-auto">CART</div>
      </div>
    )
  }
  const modalBottom = () => {
    return (
      cartItems &&
      cartItems?.length > 0 && (
        <div className="">
          <div className="flex justify-around my-4 font-bold">
            <div>TOTAL</div>
            <div className="text-yellow-500 text-lg font-bold">{total}</div>
          </div>
          <div className="flex mb-2">
            <Link
              to="/checkout"
              className="m-auto w-full bg-black cursor-pointer hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 border border-black hover:border-yellow-500"
            >
              <a className="flex justify-center" href="#">
                CHECKOUT
              </a>
            </Link>
          </div>
        </div>
      )
    )
  }

  return (
    <>
      <Modal
        onClose={() => {
          dispatch(toggleCart({ open: false }))
        }}
        modalTop={modalTop}
        modalBottom={modalBottom}
      >
        <div className="py-4 relative flex flex-col">
          {cartItems?.length > 0 && (
            <>
              <div className="flex-grow flex flex-col w-[400px]">
                {cartItems?.length > 0 &&
                  cartItems.map((cartItem: CartItem, index: number) => (
                    <CartRow cartItem={cartItem} key={index}></CartRow>
                  ))}
              </div>
            </>
          )}
          {cartItems?.length < 1 && (
            <div className="w-[400px]">
              <div className="flex justify-center my-6">cart is empty</div>
              <div className="flex mb-2">
                <button
                  onClick={() => {
                    dispatch(toggleCart({ open: false }))
                  }}
                  className="m-auto w-full bg-black cursor-pointer hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 border border-black hover:border-yellow-500"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}
export default CartModal
