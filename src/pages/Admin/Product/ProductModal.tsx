import React from "react"
import Modal from "../../../components/Modal/Modal"
import { Link } from "react-router-dom"

interface Props {
  close: () => void
}

const ProductModal = ({ close }: Props) => {
  const modalTop = () => {
    return (
      <div className="flex my-4">
        <div className="m-auto">CART</div>
      </div>
    )
  }
  const modalBottom = () => {
    return (
      <div className="">
        <div className="flex justify-around my-4 font-bold">
          <div>TOTAL</div>
          <div className="text-yellow-500 text-lg font-bold">{"total"}</div>
        </div>
        <div className="flex mb-2">
          <Link
            to="/checkout"
            className="m-auto w-full bg-black cursor-pointer hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 border border-black hover:border-yellow-500"
          >
            <a className="flex justify-center" href="Admin#">
              CHECKOUT
            </a>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Modal
        onClose={() => {
          close()
        }}
        modalTop={modalTop}
        modalBottom={modalBottom}
      >
        <div className="py-4 relative flex flex-col">
          <div className="w-[400px]">
            <div className="flex justify-center my-6">cart is empty</div>
            <div className="flex mb-2">
              <button
                onClick={() => {}}
                className="m-auto w-full bg-black cursor-pointer hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 border border-black hover:border-yellow-500"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
export default ProductModal
