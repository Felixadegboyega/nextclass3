"use client"

const Error = ({ error }: { error: Error }) => {
  console.log(error.message)

  return <div>Error</div>
}

export default Error
