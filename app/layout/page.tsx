import Button from "../components/Button"

const Page = () => {
  return (
    <div className="">
      <h3 className="text-2xl md:text-4xl text-center font-bold ">Layout Here</h3>
      <div className="flex gap-4 sm:gap-20 flex-wrap /justify-center mt-10 lg:mt-20 md:flex-row justify-evenly items-center">
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>

        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>

        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>

        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
        <div className="size-40 min-w-40 /flex-1 bg-slate-700"></div>
      </div>

      <div>
        <h3 className="text-blue-800 text-5xl my-20 text-center font-bold">
          {" "}
          GRID
        </h3>

        <div className="grid grid-cols-6 gap-4">
          <div className="border h-40"></div>
          <div className="border h-40"></div>
          <div className="border h-40 col-span-2 col-start-4"></div>
          <div className="border h-40"></div>
          <div className="border h-40 "></div>
        </div>

        
        <div className="p-20">
          <input type="text" className="px-4 py-2 rounded-lg border border-gray-300 focus:border-gray-800 transition outline-none placeholder:text-blue-400" placeholder="Username" />
        </div>

        <Button text='Register' />
      </div>
    </div>
  )
}

export default Page
