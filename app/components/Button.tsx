"use client"

import React from "react"

const Button = ({ text }: { text: string }) => {
  return (
    <button className="rounded-lg px-4 py-2 m-20 cursor-pointer bg-teal-700 text-white hover:bg-teal-900 transition-all font-medium hover:duration-700 ">
      {text}
    </button>
  )
}

export default Button
