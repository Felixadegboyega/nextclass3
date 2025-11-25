// [{_id:"hello"}, {_id:"hi"}, {slug:""}]

import ProductModel from "@/app/models/product"
import { Metadata } from "next"

// export const metadata: Metadata = {
//   title: "Single Product Page",
// }

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ _id: string }>
}) => {
  const { _id } = await params
  const product = await fetch(`https://fakestoreapi.com/products/${_id}`).then(
    (res) => res.json()
  )
  // const product = await ProductModel.findById(_id)

  const metadata: Metadata = {
    title: `${product.title} Site Name`,
    // description:
    // openGraph: {
    // images: {
    // url: product.imageLink,
    // },
    // },
  }

  return metadata
}

const Page = async ({ params }: { params: Promise<{ _id: string }> }) => {
  const { _id } = await params
  console.log(_id)

  return <div>This is a single product ({_id}) page </div>
}

export default Page
