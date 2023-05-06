import React, { useEffect, useState } from "react";
import { getProducts } from "../../mock/products";
import { Product } from "../../interfaces/Product";
import ProductItem from "./ProductItem";

const ProductTiles = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((products) => {
      // @ts-ignore
      setProducts(products);
    });
  }, []);

  return (
    <>
      <div className="px-4 pt-5 pb-9 px-6">
        <div className="grid grid-cols-4 gap-x-4 gap-y-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductTiles;
