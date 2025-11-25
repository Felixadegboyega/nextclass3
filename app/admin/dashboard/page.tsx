import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next Admin Dashboard",
  description: "Short a description about the Admin dashboard",
  openGraph: {
    images: {
      url: "",
    },
  },
}

const Page = () => {
  return <div>This is the Admin dashboard</div>
}

export default Page
