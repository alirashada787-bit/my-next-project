
interface ICommentProps{
    comment : string ;
}


const CommentItems = ({comment} : ICommentProps ) => {
  return (
    <div className="flex gap-3 py-4 border-b border-green-900" >
      
<p className="text-green-800 " >

{comment}

</p>

    </div>
  )
}

export default CommentItems
