import ProductListS from "@/app/components/ProductListS"
import { Suspense } from "react"
import styles from "./products.module.css"
import Image from "next/image"

const Page = () => {
  // fetch()
  return (
    <div>
      <Image
        src={
          "https://images.unsplash.com/photo-1761839257864-c6ccab7238de?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="size-24 object-cover"
        // src={"/images/unsplash-img.avif"}
        alt="Alt"
        width={1000}
        height={1000}
      />

      <Suspense fallback={<div>Product is loading here...</div>}>
        <ProductListS />
      </Suspense>

      <div className={styles.card}></div>
    </div>
  )
}

export default Page
