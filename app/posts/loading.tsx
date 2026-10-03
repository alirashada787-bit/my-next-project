
const postsSkeleton = [1 , 2 , 3 , 4 , 5 , 6] ;

const PostsLoading = () => {
  return (
    <div className="container m-auto px-4 animate-pulse " >

<div className="my-4 mx-auto w-full md:w-2/3 bg-green-400 h-10 ">

</div> 
      
<div className=" flex items-center justify-center flex-wrap gap-2 " >

{postsSkeleton?.map((item)=>(
  
<div key={item} className="p-2 md:w-2/5 lg:w-1/4 bg-gray-100 rounded-md " >   
  <h2 className=" bg-green-700 h-4 "  >   </h2>
  <p  className="bg-gray-600 h- mt-2 " ></p>
  
</div>

))}

</div>

<div className="flex items-center justify-center mt-8 mb-10 bg-green-400 h-10 w-40 mx-auto  " ></div>
    </div>
  )
}

export default PostsLoading
