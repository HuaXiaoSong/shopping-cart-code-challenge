import { Product } from "../interfaces/Product";

const mockProducts = () => {
  const products = [];

  for (let i = 1; i <= 100; i++) {
    const product = {
      id: i,
      sku: `SKU${i}`,
      name: `Product ${i}`,
      description: `A great product ${i}`,
      price: i * 9.99,
    };

    products.push(product);
  }

  return products;
};

function fetchProducts() {
  let products: Product[] = [];
  const str = localStorage.getItem("PRODUCTS");
  if (str && JSON.parse(str) && JSON.parse(str).length > 0) {
    products = JSON.parse(str);
  } else {
    products = mockProducts();
    localStorage.setItem("PRODUCTS", JSON.stringify(products));
  }
  return products;
}

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fetchProducts());
    }, 500);
  });
}
