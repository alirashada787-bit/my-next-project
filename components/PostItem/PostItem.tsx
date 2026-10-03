import type { TPost } from "@/utils/Types"
import Link from "next/link"


const PostItem = ({post}:{ post : TPost}
 ) => {
  return (
    <div key={post.id} className="p-2 md:w-2/5 lg:w-1/4 bg-gray-100 border-2 border-blue-400 rounded-md " >   
  <h2 className="text-2xl font-bold text-green-700 line-clamp-1"  >  {post.title} </h2>
  <p  className="text-sm text-gray-600 line-clamp-2 " >{post.body}</p>
  <Link href={`/posts/${post.id}`} className="text-sm text-green-900" > Read More... </Link>
</div>
  )
}

export default PostItem
