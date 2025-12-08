"use client"

import gql from "graphql-tag"
import { useEffect, useState } from "react"
import { graphqlClient as client } from "../utils/graphql-client"
import { useQuery } from "@apollo/client/react"
import { useSearchParams } from "next/navigation"

interface UserResp {
  firstname: string
  lastname: string
  _id: string
}

const USERS_QUERY = gql`
  query UsersQuery($id: ID!) {
    users {
      firstname
      lastname
      _id
    }

    user(_id: $id) {
      firstname
      lastname
    }
  }
`

const Page = () => {
  // const [users, setusers] = useState<UserResp[]>([])

  const queryparams = useSearchParams()
  const userId = queryparams.get("userId")

  const { loading, error, data } = useQuery<{
    users: UserResp[]
    user: UserResp
  }>(USERS_QUERY, {
    client,
    variables: {
      id: userId,
    },
  })

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     graphqlClient
  //       .query({
  //         query: gql`
  //           query UsersQuery {
  //             users {
  //               firstname
  //               lastname
  //               _id
  //             }
  //           }
  //         `,
  //       })
  //       .then((resp) => {
  //         const { users } = resp.data as { users: UserResp[] }
  //         setusers(users)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }

  //   fetchUsers()
  // }, [])

  return (
    <div>
      {loading && "Fetching..."}
      {error && "Errorrrrrr!!!!"}
      {data?.user.firstname}
      {data?.users.map((each) => (
        <div key={each._id}>{each.firstname}</div>
      ))}
    </div>
  )
}

export default Page
