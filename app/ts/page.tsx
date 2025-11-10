// number(integer, float, double), string, boolean, undefined, null, array, object, void
"use client"

import { User, UserProfile } from "../utils/type"

const users: User[] = [
  {
    id: 1,
    name: "Felix",
    department: "Software Engineering",
    age: 18,
  },
  {
    id: 2,
    name: "Cynthia",
    department: "Software Engineering",
    age: 35,
  },
  {
    id: 3,
    name: "Gloria",
    department: "Software Engineering",
    age: 12,
  },
]

const getUser = (phone: UserProfile["phone"]) => {}

// const getUser: (id: number) => User | undefined = (id: number) => {
//   const user = users.find((eachuser) => eachuser.id === id)
//   return user
// }

const students: Array<string> = ["Felix", "Cynthia", "Gentle"]
const scores: number[] = [0, 3, 4, 5, 6, 6]

const Page = () => {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className="m-20 border rounded-lg p-4">
          <div>{user.name}</div>
          <div>{user.department}</div>
          <div>{user.age}</div>
        </div>
      ))}
    </div>
  )
}

export default Page
