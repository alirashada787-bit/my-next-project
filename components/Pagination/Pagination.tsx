
const pages = [1 , 2 , 3 , 4 , 5] ;

const Pagination = () => {
  return (
    <div className="flex items-center justify-center mt-8 mb-10 " >

<div  className="border border-green-900 px-4 font-bold text-xl cursor-pointer hover:bg-green-100 transition py-1 text-green-700 " >

Prev...

</div>

{pages.map((page)=>(

<div key={page} className="border border-green-900 px-4 font-bold text-xl cursor-pointer hover:bg-green-100 transition py-1 text-green-800 " >

{page} 

</div> ))}  

<div  className="border border-green-900 px-4 font-bold text-xl cursor-pointer hover:bg-green-100 transition py-1 text-green-700 " >

Next...

</div>

    </div>
  )
}

export default Pagination ;
