"use client" ;

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const AdminPostForm = () => {

const [title,setTitle] = useState("") ;

const [description,setDescription] = useState("") ; 
 const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{

e.preventDefault();
if(title === "") return toast.error("Title Is Required") ;
if(description === "") return toast.error("Description Is Required") ;
console.log(title,description);
  };
  return (
    
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
<p className="text-sm text-green-800 " >Add Post Details :</p>
<div className=" grid grid-col-1 md:grid-cols-2 gap-4 " >

<label htmlFor="title" className="flex flex-col text-sm text-green-950 " >
<span className="mb-1" >Title</span>
<input type="text" id="title" placeholder="title" value={title} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 "
onChange={(e)=>setTitle(e.target.value)}
 />

</label>



<label htmlFor="description" className="flex flex-col text-sm text-green-950 " >
<span className="mb-1" >Description</span>
<textarea id="description" placeholder="write description" value={description} className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 "
onChange={(e)=>setDescription(e.target.value)}
 />
</label>
</div>

<button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-lg font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer   " >
  Add Post
</button>


</form>
    
  )
}
export default AdminPostForm ;