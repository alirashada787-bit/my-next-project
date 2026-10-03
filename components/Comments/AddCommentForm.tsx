"use client" ;

import { useState } from "react";


const AddCommentForm  = () => {

const [commentText,setCommentText] = useState("") ;

 const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{

e.preventDefault();

console.log(commentText);
  };
  return (
    
<form onSubmit={handleSubmit} className="my-4 mx-auto w-full md:w-2/3 ">

<input type="text"  placeholder="Add Your Comment..." value={commentText} className="w-full mb-3 px-3 py-2 border border-gray-200 rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 "
onChange={(e)=>setCommentText(e.target.value)}
 />

<button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-lg font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer   " >
  Add Comment 
</button>
</form>
    
  )
}
export default AddCommentForm ;
