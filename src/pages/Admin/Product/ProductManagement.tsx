import React, { useEffect, useState } from "react"
import { Modal } from "antd"
import { ProductForm } from "./ProductForm"
import { useAppDispatch } from "../../../app/hooks"
import { Product } from "../../../interfaces/Product"
import { toggleCart } from "../../Cart/cartSlice"
import { getProducts } from "../../../mock/products"
import ProductTable from "./ProductTable"

export function ProductManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const [products, setProducts] = useState<Product[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const fetchProducts = () => {
    getProducts().then((products) => {
      // @ts-ignore
      setProducts(products)
    })
  }

  useEffect(() => {
    dispatch(toggleCart(false))
    fetchProducts()
  }, [])

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const editProduct = (product: Product) => {
    setIsModalOpen(true)
    setSelectedProduct(product)
  }

  return (
    <>
      <ProductTable products={products} onEdit={editProduct} />
      {isModalOpen && (
        <Modal
          title="Edit Product"
          open={isModalOpen}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ProductForm
            product={selectedProduct}
            updated={() => {
              fetchProducts()
              setIsModalOpen(false)
            }}
          />
        </Modal>
      )}
    </>
  )
}
