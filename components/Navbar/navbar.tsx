import Link from "next/link"


export const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center space-x-8">
<Link className="text-gray-800 hover:text-blue-600" href={"/"} >Home</Link>

<Link className="text-gray-800 hover:text-blue-600" href={"/admin"} >Admin</Link>
    
      <Link className="text-gray-800 hover:text-blue-600 transition-colors capitalize " href={"/about"} >About</Link>
    
      
    
      

      <Link className="text-gray-800 hover:text-blue-600 transition-colors capitalize " href={"/posts"} >Posts</Link>

      <Link className="text-gray-800 hover:text-blue-600 transition-colors capitalize " href={"/contactUs"} >Contact Us</Link>
      

</nav>
  )
}

