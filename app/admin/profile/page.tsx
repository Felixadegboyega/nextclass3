import { logout } from "@/app/utils/actions"
import { verifyUser } from "@/app/utils/session"
import { redirect } from "next/navigation"

const Page = async () => {
  const { user, success } = await verifyUser()
  if (!success) {
    redirect("/signin")
  }

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div>Firstname: {user.firstname}</div>
        <div>Lastname: {user.lastname}</div>
        <div>Email: {user.email}</div>
        <form action={logout}>
          <button
            type="submit"
            className="py-2 px-4 bg-green-800 text-white rounded-lg"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  )
}

export default Page
