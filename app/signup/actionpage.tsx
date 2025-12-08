"use client"

import { ChangeEvent, useState } from "react"
import { signUp } from "../utils/actions"

const Page = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  })

  const handleSignup = async () => {
    const response = await signUp(user)
    if (!response.success) {
      alert(response.message)
    } else {
      alert(response.message)
    }
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    const value = e.target.value

    const updatedUser = {
      ...user,
      [name]: value,
    }

    setUser(updatedUser)
  }

  return (
    <div className="flex items-center bg-gray-100 justify-center h-screen">
      <div className="w-full max-w-lg bg-white rounded-lg p-6">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">
          Sign Up For NextJS Class
        </h3>
        <div className="flex flex-col gap-4 w-full">
          {user.firstname}
          <input
            type="text"
            name="firstname"
            onChange={handleInput}
            className="border border-gray-500 focus:border-blue-600 transition px-4 py-2 rounded-lg"
            placeholder="Firstname"
          />
          <input
            onChange={handleInput}
            type="text"
            name="lastname"
            className="border border-gray-500 focus:border-blue-600 transition px-4 py-2 rounded-lg"
            placeholder="Lastname"
          />
          <input
            onChange={handleInput}
            type="text"
            name="email"
            className="border border-gray-500 focus:border-blue-600 transition px-4 py-2 rounded-lg"
            placeholder="Email"
          />
          <input
            onChange={handleInput}
            type="password"
            name="password"
            className="border border-gray-500 focus:border-blue-600 transition px-4 py-2 rounded-lg"
            placeholder="Password"
          />
          <button
            onClick={handleSignup}
            className="bg-blue-700 hover:bg-blue-800 transition px-4 py-2.5 w-full rounded-lg text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
