"use client"

import Link from "next/link"
import { Navbar } from "../Navbar/navbar"

import { useState } from "react"
import { IoIosCloseCircleOutline, IoIosMenu } from "react-icons/io"

const Header = () => {
   const [isOpen,setIsOpen] = useState(false) ;
  return (
    <>
     <header className="fixed top-0 bg-white/90 w-full backdrop-blur-sm shadow-sm z-30" >
<div className="container mx-auto px-4 py-4" >

    <div className="flex items-center justify-between" >

<Link href={"/"}>
<span className="text-2xl font-bold text-gray-400" >
WEGO ZAIN
</span>
</Link>
<Navbar/>
<button className="md:hidden" 
onClick={()=>setIsOpen((prev)=>!prev)}>
   { isOpen ? <IoIosCloseCircleOutline  
    className="w-6 h-6"/> :  <IoIosMenu className="w-6 h-6" />  }
</button>

<div className="hidden md:flex items-center space-x-4">
<button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-800 text-white">
    <Link href={"/login"} >Login</Link>
</button>
<button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-800 text-white">
    <Link href={"/register"} >Register</Link>
</button>
</div>
    </div>
{
    isOpen && <nav className="md:hidden flex flex-col items-center space-y-3 mt-4 pb-4 " >
       
    
      <Link className="text-gray-800 hover:text-blue-600 transition-colors capitalize " href={"/about"} >About</Link>
    
      
    
      

      <Link className="text-gray-800 hover:text-blue-600 transition-colors capitalize " href={"/posts"} >Posts</Link>

      <Link className="text-gray-800 hover:text-blue-600 transition-colors capitalize " href={"/contactUs"} >Contact Us</Link>
         </nav> 
}
</div>

         </header>
      
    </>
  )
}

export default Header
