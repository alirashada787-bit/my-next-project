"use client" ;

import { useState } from "react";
import AdminSidebar from "./AdminSidebar"
import { IoIosMenu } from "react-icons/io";
import { HiOutlineBookOpen, HiOutlineFolderOpen } from "react-icons/hi";

interface IAdminLayoutProps {
    children : React.ReactNode ;
}

const AdminLayout = ({ children }: IAdminLayoutProps) => {

const [sidebarOpen , setSidebarOpen] = useState(false) ;

  return (
    <div className="flex items-start min-h-screen bg-slate-50 rounded-md  " >
      <AdminSidebar isOpen={sidebarOpen} onClose = {()=>setSidebarOpen(false)} 
       />
      <main className="flex-1 md:ml-64 p-4 md:p-8 " >

<div className="max-w-5xl mx-auto" >

<div className="flex items-center justify-between mb-8" >

<div>

<h2 className="text-3xl font-bold text-slate-900" >

Dashboard

</h2>
<p className="text-slate-600 mt-2" >

Welcome to your admin panel

</p>

</div>

<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer " onClick={()=>setSidebarOpen(true)} >

<HiOutlineFolderOpen
 className="w-6 h-6" />

</button>

</div>

<div className="bg-white rounded-lg shadow-md p-6" >

{children}

</div>

</div>

      </main>
    </div>
  )
}

export default AdminLayout
