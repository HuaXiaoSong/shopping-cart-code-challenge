import React, { useEffect, useState } from "react"
import { getProducts } from "../../mock/products"
import { Product } from "../../interfaces/Product"
import ProductItem from "./ProductItem"
import CartModal from "../Cart/CartModal"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { toggleCart } from "../Cart/cartSlice"

const ProductTiles = () => {
  const dispatch = useAppDispatch()
  const [products, setProducts] = useState<Product[]>([])
  const { open } = useSelector((store: any) => store.cart)

  useEffect(() => {
    dispatch(toggleCart(false))
    getProducts().then((products) => {
      // @ts-ignore
      setProducts(products)
    })
  }, [])

  return (
    <>
      <div className="px-4 pt-5 pb-9 px-6">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      {open && <CartModal />}
    </>
  )
}
export default ProductTiles
