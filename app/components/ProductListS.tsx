// server component
"use server"

import ProductListCL from "@/app/components/ProductListCL"
import { Product } from "@/app/utils/type"

// Asynchronous Functional Component
const ProductListS = async () => {
  const products: Product[] = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json())

  return (
    <div>
      Product Page
      {products.map((each) => (
        <div key={each.id}>{each.title}</div>
      ))}
      {/* <ProductList /> */}
      <ProductListCL />
    </div>
  )
}

export default ProductListS
