
interface IItemPageProps{
  params:Promise<{
    post?:string[];
  }>;
}

const PostPage = async ({params}:IItemPageProps) => {
  const resolvedparams = await params ;

  const post = resolvedparams.post || [] ;
  
  return (
    <div>
      <h2>Post Page</h2>
      <hr />
      <ul>
       { post.slice(1).map((item,index)=>(
        <li key={index} >{item}</li>
       ))
       }
      </ul>
    </div>
  )
}

export default PostPage
