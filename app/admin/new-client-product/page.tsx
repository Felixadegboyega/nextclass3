"use client"

import { addProduct } from "@/app/utils/actions"
import { useRef, useTransition } from "react"

const Page = () => {
  const titleRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  // const [state, action, pending] = useActionState(addProduct, {title:"", price:""})

  const [isPending, startTransition] = useTransition()

  const uploadProduct = async () => {
    const title = titleRef.current?.value
    const price = priceRef.current?.value

    if (title && price) {
      startTransition(async () => {
        await addProduct({ title, price })
      })
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div
        // action={addProduct}
        className="rounded-xl p-3 w-full max-w-xl bg-white shadow flex flex-col gap-4"
      >
        <h3 className="text-lg font-medium">New Client Product Page</h3>
        <input
          ref={titleRef}
          type="text"
          name="title"
          className="rounded p-2 border"
          placeholder="Title"
        />
        <input
          ref={priceRef}
          type="number"
          name="price"
          className="rounded p-2 border"
          placeholder="Price"
        />
        <button onClick={uploadProduct}>
          {isPending ? "Creating Post..." : "Create"}
        </button>
        {/* <button formAction={addProduct}>Create</button> */}
        {/* <Button text="Submit" /> */}
      </div>
    </div>
  )
}

export default Page
