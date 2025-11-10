"use client"

import { useEffect, useState } from "react"

interface Product {
  id: number
  title: string
  price: number
  description: string
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const result = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      )
      setIsLoading(false)
      setProducts(result)
    }

    fetchProducts()
  }, [])

  return (
    <div>
      {isLoading && "Loading Products..."}
      {products.map((each) => (
        <div key={each.id}>{each.title}</div>
      ))}
    </div>
  )
}

export default ProductList
