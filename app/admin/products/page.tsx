import ProductListS from "@/app/components/ProductListS"
import { Suspense } from "react"

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Product is loading here...</div>}>
        <ProductListS />
      </Suspense>
    </div>
  )
}

export default Page
