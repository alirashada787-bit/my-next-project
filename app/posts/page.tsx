"use client" ;

import Pagination from "@/components/Pagination/Pagination";
import PostItem from "@/components/PostItem/PostItem";
import SearchPostInput from "@/components/SearchPostInput/SearchPostInput";
import type { TPost } from "@/utils/Types";
import axios from "axios";
import { useEffect, useState } from "react";

const PostsPage = () => {
 
const [posts , setPosts] = useState<TPost[]>([]) ;


  useEffect(()=>{
    const getPosts = async () => {

 try{
const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
setPosts(res.data) ;
  }
  catch(error){
console.log(error)
  } };
  getPosts() ;
},[]) ;
 



  return (
    <>
    <div className="container m-auto px-4  " >

<SearchPostInput/>
<div className=" flex items-center justify-center flex-wrap gap-2 " >

{posts?.slice(0,6).map((post : TPost)=>(
  

<PostItem key={post.id} post={post} />
))}

</div>
<Pagination/>
    </div>
    
    </>
  )
}

export default PostsPage
