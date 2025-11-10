import Button from "@/app/components/Button"
import { addProduct } from "@/app/utils/actions"

const Page = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <form
        action={addProduct}
        className="rounded-xl p-3 w-full max-w-xl bg-white shadow flex flex-col gap-4"
      >
        <h3 className="text-lg font-medium">New Product Page</h3>
        <input
          type="text"
          name="title"
          className="rounded p-2 border"
          placeholder="Title"
        />
        <input
          type="number"
          name="price"
          className="rounded p-2 border"
          placeholder="Price"
        />
        <Button text="Submit" />
      </form>
    </div>
  )
}

export default Page
