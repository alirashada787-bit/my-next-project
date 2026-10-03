

export default async function SearchResult ({searchParams
  
} :{ searchParams : Promise<{
    query?: string

  }> ; } ) {

const resolvedSearch

= await searchParams ;

const query = resolvedSearch.query ;

return(
  <div>

<h1> Search Result Is : {query} </h1>

  </div>  )}



