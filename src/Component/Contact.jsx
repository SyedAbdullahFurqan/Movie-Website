import React, { useEffect } from 'react'
import { Form } from 'react-router-dom'
import About from '../About'
import {QueryClient, useInfiniteQuery, useQuery} from '@tanstack/react-query'


import Trend from '../Trend'
import { useSelector } from 'react-redux'
import { move } from '../Axios'

/*
export const Contacts = async({request}) =>{

try {
  const res =await request.formData()
const datas=Object.fromEntries(res)
console.log(datas)
} catch (error) {
  console.log(error.message)
}}
*/




const Contact = () => {


const {data,hasNextPage,fetchNextPage}=useInfiniteQuery(

{
  queryKey:["move"],
    queryFn: ({ pageParam = 1 }) => move(pageParam) , 


  getNextPageParam:(lastPage,allPages)=>{
 console.log(allPages.length +1)
 console.log(lastPage.results.length)
return lastPage.results.length == 20||19 ? allPages.length + 1: undefined;
 
}
  }  
 


)


   /*  if (lastPage.page < lastPage.total_pages) {
    return allPages + 1;
  }
  return undefined;
*/

function handless(params) {
  const bottom= window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200
console.log(bottom)
console.log(window.innerHeight+window.scrollY)
console.log( document.documentElement.scrollHeight -1)
if (bottom && hasNextPage) {
  fetchNextPage()
}


}




useEffect(() => {
  window.addEventListener("scroll",handless)
  return ()=>  window.removeEventListener("scroll",handless)
}, [fetchNextPage,hasNextPage]);

console.log(data)
  return (
    <>
   


   <h1 className='pt-4 mt-2 mx-3 text-[30px]'>MOVEIS </h1>

<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  overflow-hidden mx-4 px-4 gap-4'>

{data?.pages?.map((recive)=>(
  
<>

{recive.results.map((gets)=>

<Trend cards={gets}/>

)}

</>
))}

</div>



{/*

<Form method='POST' action="/Contact">
<div>
<label htmlFor="">Name</label>
<input type="text" name='user' />



<label htmlFor="">Password</label>
<input type="password" name="password" id="" />

<button type="submit">send meseag</button></div>
</Form> */}
    </>
  )
}

export default Contact
