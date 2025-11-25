"use client"

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex items-center flex-col gap-6 justify-center text-center p-4 h-screen w-full">
      <h3 className="font-bold text-3xl">Something went wrong!</h3>
      <div className="flex items-center justify-center">
        <button
          onClick={reset}
          className="bg-amber-700 text-xl rounded-lg px-10 py-4 text-white"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Error
