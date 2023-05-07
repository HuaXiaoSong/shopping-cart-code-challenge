import { Product } from "../../interfaces/Product"
import { addProductToCart } from "../Cart/cartSlice"
import { useAppDispatch } from "../../app/hooks"

interface Props {
  product: Product
}

const ProductItem = (props: Props) => {
  const { product } = props
  const dispatch = useAppDispatch()
  const handleAddProduct = () => {
    dispatch(addProductToCart({ product, count: 1 }))
  }
  return (
    <>
      <div className="flex flex-col" key={product.id}>
        <div>
          <img
            className="m-auto w-full object-contain min-h-0 object-cover rounded-s-md rounded-s-md
                                            transition duration-200 ease-linear transform scale-80 hover:scale-105"
            src={"https://via.placeholder.com/150x80"}
            alt=""
          />
        </div>
        <div className="m-auto w-full overflow-hidden ps-3.5 sm:ps-5 md:ps-4 xl:ps-5 2xl:ps-6 3xl:ps-10">
          <div className="flex">
            <div className="m-auto text-heading font-semibold truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
              {product.name}
            </div>
          </div>
          <div className="flex">
            <div className="m-auto text-heading truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
              {product.description}
            </div>
          </div>
          <div className="flex">
            <div className="m-auto text-heading truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
              {product.sku}
            </div>
          </div>
          <div className="flex mb-2">
            <div className="m-auto text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3">
              ${product.price}
            </div>
          </div>
          <div className="flex mb-2">
            <button
              onClick={handleAddProduct}
              className="m-auto w-full bg-black cursor-pointer hover:bg-yellow-500 text-white font-semibold hover:text-white py-4 border border-black hover:border-yellow-500"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
