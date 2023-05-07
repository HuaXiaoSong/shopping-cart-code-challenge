import React from "react"
import CartQuantity from "../../components/CartQuantity/CartQuantity"
import { AiOutlineDelete } from "react-icons/all"
import { useAppDispatch } from "../../app/hooks"
import { addProductToCart, removeCartItem } from "./cartSlice"

interface Props {
  cartItem: any
}

const CartRow = ({ cartItem }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div className="grid grid-cols-12 hover:bg-gray-100 px-4 py-2">
      <div className="col-span-6 flex gap-2">
        <div className="my-auto">
          <img className="" src={"https://via.placeholder.com/150x80"} alt="" />
          <span className="m-auto text-sm break-all">{cartItem.product.name}</span>
        </div>
      </div>

      <div className="col-span-6 flex gap-2 flex-col justify-center">
        <div
          className="flex justify-center hover:text-yellow-500 text-gray-500 cursor-pointer"
          onClick={() => {
            dispatch(removeCartItem({ product: cartItem.product }))
          }}
        >
          <AiOutlineDelete />
        </div>

        <div className="flex">
          <span className="m-auto text-center text-yellow-500">
            {`$${cartItem.product.price.toFixed(2)}`}
          </span>
        </div>
        <div className="flex">
          <div className="m-auto">
            <CartQuantity
              quantity={cartItem.quantity}
              increase={() => {
                dispatch(addProductToCart({ product: cartItem.product, count: 1 }))
              }}
              decrease={() => {
                dispatch(addProductToCart({ product: cartItem.product, count: -1 }))
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartRow
