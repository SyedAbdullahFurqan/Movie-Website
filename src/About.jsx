import React, { lazy, useEffect } from 'react'
import {QueryClient, useInfiniteQuery, useQuery} from '@tanstack/react-query'
import { move, show } from './Axios'

import Card from './Component/Card'
import Trend from './Trend'
import { useSelector } from 'react-redux'

const About = ({moves}) => {
 const url= useSelector(state => state.counter.imga)



const {data,hasNextPage,fetchNextPage}=useInfiniteQuery(

{
  queryKey:["post"],
    queryFn: ({ pageParam = 1 }) => show(pageParam) , 


  getNextPageParam:(lastPage,allPages)=>{
 console.log(allPages[0].results)

return lastPage.results.length === 19 || 20 ? allPages.length + 1: undefined;
 
}
  }  
 


)

 console.log()
   /*  if (lastPage.page < lastPage.total_pages) {
    return allPages + 1;
  }
  return undefined;
*/

function handles(params) {
  const bottom= window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200
console.log(bottom)
console.log(window.innerHeight+window.scrollY)
console.log( document.documentElement.scrollHeight -1)
if (bottom && hasNextPage) {
  fetchNextPage()
}


}




useEffect(() => {
  window.addEventListener("scroll",handles)
  return ()=>  window.removeEventListener("scroll",handles)
}, [fetchNextPage,hasNextPage]);

console.log(data)
  return (
    <>
   
        <h1 className='pt-4 mt-2 mx-3 text-[30px]'>POPULAR SHOW</h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  overflow-hidden mx-4 px-4 gap-4'>

{data?.pages?.map((recive)=>(
  
<>

{recive.results.map((gets)=>

<Trend cards={gets}/>

)}

</>
))}

</div>

      
    </>
  )
}

export default About
