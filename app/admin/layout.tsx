import Link from "next/link"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen">
      <div className="w-40 bg-blue-900 text-white h-full overflow-auto flex flex-col gap-2 p-4">
        <Link className="hover:text-blue-200 transition" href={"/admin"}>
          Admin
        </Link>
        <Link
          className="hover:text-blue-200 transition"
          href={"/admin/dashboard"}
        >
          Dashboard
        </Link>
        <Link
          className="hover:text-blue-200 transition"
          href={"/admin/products"}
        >
          Products
        </Link>
        <Link
          className="hover:text-blue-200 transition"
          href={"/admin/newproduct"}
        >
          New Product
        </Link>
      </div>
      {children}
    </div>
  )
}
