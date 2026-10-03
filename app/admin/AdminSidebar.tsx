import Link from "next/link";
import { ReactNode } from "react";
import { CgClose } from "react-icons/cg";
import { FaRegComment } from "react-icons/fa"
import { IoIosHome, IoIosPaper } from "react-icons/io"

interface INavItem  {
  
    path : string ;
    label : string ;
    icon : ReactNode ;
   
}

interface ISidebarProps {
 isOpen? : boolean ;
 onClose? : ()=> void ;   
}


const AdminSidebar = ({isOpen , onClose } : ISidebarProps ) => {

       const navLinks : INavItem [] =[

        { path:"/admin" , label : "Dashboard" , icon : <IoIosHome/>  } ,
        { path:"/admin/posts-table" , label : "Posts" , icon : <IoIosPaper />  } , 
        { path:"/admin/comments-table" , label : "Comments" , icon : <FaRegComment />
}
    ] ;


  return (
    <>
    {isOpen && ( <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={onClose} /> ) }
    <aside className={`fixed  left-0 top-0 md:top-auto w-64 h-screen bg-linear-to-b from-slate-900 to-slate-700 border-r border-slate-700 shadow-lg transition-transform duration-300 ease-in-out z-40 ${isOpen?"translate-x-0" : "-translate-x-full" } md:translate-x-0 `} >

<button onClick={onClose} className="absolute top-8 right-4 md:hidden text-slate-200 hover:text-white text-2xl cursor-pointer " >

<CgClose/>

</button>

      <div className="flex items-center justify-center h-20 border border-b border-slate-700 " >

<h1 className="text-2xl font-bold text-white " >

Admin

</h1>

      </div>

<nav className="flex-1 px-4 py-8 space-y-2" >

{navLinks.map((link,index)=>(
    <Link key={index} href={link.path} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 group " >
         
        <span className="flex items-center group-hover:scale-110 transition-transform duration-300 space-x-5" >
            {link.icon}
           </span>
           <span className="font-medium" >{link.label}</span>
        </Link>
))}

</nav>

<div className="flex border-t border-slate-500  p-5" >

<button className="bg-green-500 text-white p-2 w-full cursor-pointer  rounded-xl hover:bg-green-400 font-medium transition-colors duration-200" >

Log Out

</button>

</div>

    </aside>
    
    </>
  )
}

export default AdminSidebar
