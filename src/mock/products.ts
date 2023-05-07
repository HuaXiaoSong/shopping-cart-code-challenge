import { Product } from "../interfaces/Product"

const mockProducts = () => {
  const products = []

  for (let i = 1; i <= 100; i++) {
    const product = {
      id: i,
      sku: `SKU${i}`,
      name: `Product ${i}`,
      description: `A great product ${i}`,
      price: i * 9.99,
    }

    products.push(product)
  }

  return products
}

function fetchProducts() {
  let products: Product[] = []
  const str = localStorage.getItem("PRODUCTS")
  if (str && JSON.parse(str) && JSON.parse(str).length > 0) {
    products = JSON.parse(str)
  } else {
    products = mockProducts()
    localStorage.setItem("PRODUCTS", JSON.stringify(products))
  }
  return products
}

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchProducts())
    }, 500)
  })
}

export function updateProduct(product: Product) {
  const products = fetchProducts()
  const findProductIndex = products.findIndex((p) => p.id === p.id)
  products[findProductIndex] = {
    ...product,
    id: products[findProductIndex].id,
  }
  localStorage.setItem("PRODUCTS", JSON.stringify(products))

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

// export function saveOrder(order: Order) {
//     const products = JSON.parse(localStorage.getItem("PRODUCTS") || "")
//     const existingOrders = localStorage.getItem("ORDERS")
//         ? JSON.parse(localStorage.getItem("ORDERS") || "")
//         : []
//     const orders = [
//         ...existingOrders,
//         {
//             order,
//             products,
//         },
//     ]
//     localStorage.setItem("ORDERS", JSON.stringify(orders))
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true)
//         }, 500)
//     })
// }
