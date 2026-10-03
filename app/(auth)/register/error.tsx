"use client" ;

import Link from "next/link";

interface IErrorPageProps{
    error:Error,
    reset:()=> void ,
}

const error = ({error,reset}:IErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-10" >
      <h1 className="text-lg text-red-700 font-bold " >Register-Page-Error</h1>

      <p> {error?.message} </p>

      <button onClick={()=>reset()} className="bg-blue-700 text-white hover:bg-blue-500 border-2 rounded-lg p-2 cursor-pointer" >Try Again</button>

<Link href="/" className="bg-blue-700 text-white hover:bg-blue-500 border-2 rounded-lg p-2" > Go To Home Page </Link>

    </div>
  )
}

export default error
