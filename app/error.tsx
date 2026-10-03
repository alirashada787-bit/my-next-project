"use client";

import Link from "next/link"

interface IErrorPageProps{
    error:Error,
    reset:()=> void
}

const error = ({error , reset}:IErrorPageProps) => {
  return (
    <>
<div className="mt-8 flex flex-col gap-8 items-center justify-center" >
      <h1 className="font-bold text-2xl text-red-500" >Error</h1>
      <p>{error?.message}</p>

<button onClick={()=>reset()} className="bg-blue-800 text-lg text-white border-2 rounded-md p-2 hover:bg-blue-600 cursor-pointer" >
    Try Again 
</button>

      <Link href="/" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 text-white  " >Go To Home Page</Link>
      </div>
    </>
  )
}

export default error
