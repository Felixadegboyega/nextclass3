const Page = () => {
  return (
    <div>
      <div className="text-[20rem] text-primary animate-bounce">About</div>
      <div className="text-[20rem] hover:translate-x-20 transition animate-pulse ">
        About
      </div>
      <div className="border-[2rem] group skew-x-12 border-primary p-5 size-96 m-20 rounded-[5rem]">
        <div className="size-20 bg-blue-300 rounded group-hover:translate-x-20 transition"></div>
        <div className="size-20 bg-blue-300 rounded group-hover:scale-125 transition"></div>
        <div className="size-20 bg-blue-300 rounded animate-spin"></div>
      </div>
      <h3 className="[box-shadow:5px_10px_#ccc] m-20 bg-amber-100 text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        impedit?
      </h3>
    </div>
  )
}

export default Page
