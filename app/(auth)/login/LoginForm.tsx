"use client" ;

import { useRouter } from "next/navigation";
import Link from "next/link"

import { useState } from "react";
import { toast } from "react-toastify";


const LoginForm = () => {

 const router = useRouter() ;

const [email,setEmail] = useState("") ;

const [password,setPassword] = useState("") ; 
 const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{

e.preventDefault();
if(email === "") return toast.error("Email Is Required") ;
if(password === "") return toast.error("Password Is Required") ;

router.replace("/") ;

console.log(email,password);
  };
  return (
    
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
<p className="text-sm text-green-800 " >Sign In Your Account To Continue</p>
<div className=" grid grid-col-1 md:grid-cols-2 gap-4 " >

<label htmlFor="email" className="flex flex-col text-sm text-green-950 " >
<span className="mb-1" >Email</span>
<input type="email" id="email" placeholder="you@example.com" value={email} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 "
onChange={(e)=>setEmail(e.target.value)}
 />

</label>



<label htmlFor="password" className="flex flex-col text-sm text-green-950 " >
<span className="mb-1" >Password</span>
<input type="password" id="password" placeholder="**********" value={password} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 "
onChange={(e)=>setPassword(e.target.value)}
 />
</label>
</div>
<div className="flex items-center justify-between text-sm" >

<label className="inline-flex items-center gap-2 text-green-800" >
  <input type="checkbox" className="w-4 h-4 text-indigo-800  rounded-sm border-gray-600 focus:ring-indigo-600 " /> 
  Remember Me
</label>
<Link href="#" className="text-indigo-600 hover:underline" >
  Forgot Password ?
</Link>
</div>
<button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-lg font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer   " >
  Sign In
</button>

<div className="flex items-center gap-2 text-sm text-green-700 pt-3 " >

<span className="flex-1 border-t border-green-900  " />
<span className="px-2" >Or Continue With</span>
<span className="flex-1 border-t border-green-900  " />

</div>

<div className="grid grid-cols-2 gap-3 pt-3" >

<button type="button" className="flex items-center justify-center py-2 rounded-lg border border-green-900 bg-white hover:bg-green-100 " >
  Google
</button>
<button type="button" className="flex items-center justify-center py-2 rounded-lg border border-green-900 bg-white hover:bg-green-100 " >
  GitHub
</button>

</div>

</form>
    
  )
}
export default LoginForm
