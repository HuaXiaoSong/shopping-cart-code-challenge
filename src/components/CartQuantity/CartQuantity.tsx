import React from "react"

interface Props {
  className?: string
  quantity: number
  increase: () => void
  decrease: () => void
}

const CartQuantity = ({ className = "", quantity, increase, decrease }: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full rounded-md overflow-hidden h-8 border border-gray-300 border-solid">
          <button
            className="text-[20px] flex items-center justify-center flex-shrink-0 h-full cursor-pointer
                transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-0
                border-gray-300 hover:text-white hover:bg-black"
            onClick={() => decrease()}
          >
            -
          </button>
          <span
            className="flex-grow border-x border-y-0 border-solid border-gray-300 font-semibold flex items-center justify-center
                w-full h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base
                text-heading w-12"
          >
            {quantity}
          </span>
          <button
            className="text-[20px] flex items-center justify-center flex-shrink-0 h-full cursor-pointer
                 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-0
                 border-gray-300 hover:text-white hover:bg-black"
            onClick={() => {
              increase()
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartQuantity
