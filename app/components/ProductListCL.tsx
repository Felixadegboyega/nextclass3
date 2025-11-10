"use client"

import useSWR from "swr"
import { Product } from "../utils/type"

// ?. - Null Safe Operator

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const ProductListCL = () => {
  const { data, error, isLoading } = useSWR<Product[]>(
    "https://fakestoreapi.com/products",
    fetcher
  )

  if (isLoading) {
    return "Product is Fetching"
  }

  if (error) {
    return "be like say you go try again o"
  }

  return (
    <div>
      {/* {data?.map((each) => <div key={each.id}></div>)} */}
      {data && data.map((each) => <div key={each.id}></div>)}
    </div>
  )
}

export default ProductListCL
