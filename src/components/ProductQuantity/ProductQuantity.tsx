import React, { FC, useState } from "react"

export interface ProductQuantityProps {
  className?: string
  addQuantity: (quantity: number) => {}
}

const ProductQuantity: FC<ProductQuantityProps> = ({
  className = "",
  addQuantity,
}) => {
  const [quantity, setQuantity] = useState<number>(1)
  return (
    <div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex w-full rounded-md overflow-hidden h-11 md:h-12 border border-gray-300 border-solid">
          <button
            className="text-[20px] flex items-center justify-center flex-shrink-0 h-full cursor-pointer
                transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-0
                border-gray-300 hover:text-white hover:bg-black"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            -
          </button>
          <span
            className="flex-grow border-x border-y-0 border-solid border-gray-300 font-semibold flex items-center justify-center
                w-full h-full transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base
                text-heading w-12 md:w-20 xl:w-24"
          >
            {quantity}
          </span>
          <button
            className="text-[20px] flex items-center justify-center flex-shrink-0 h-full cursor-pointer
                 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-0
                 border-gray-300 hover:text-white hover:bg-black"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() => addQuantity && addQuantity(quantity)}
          className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md  bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-black w-full h-11 md:h-12"
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductQuantity
