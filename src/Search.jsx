import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Seal } from './redux/Counter/Slect'
import { get } from './Axios'
import Trend from './Trend'

const Search = () => {


const [Data, setData] = useState([]);
    const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get("query");

 const searchs= async()=>{
   
      if (!query) return;

      try {
        const res = await get.get(`/search/multi?`,
          {
            params: {
              api_key: "9c1352a5828c9a5331c24a2f7782b113", // Replace with your real API key
              query: query.trim()
            },
          }
        );
      setData(res.data.results);
       console.log(res.data.results)
      } catch (err) {
        console.error("Search error:", err);
      }


}

 console.log(Data)
useEffect(() => {
   
    searchs();
}, [query]);

  return (
    <div>
      <h1 className='text-[30px] text-center'>Search Item</h1>




<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  overflow-hidden mx-4 px-4 gap-4'>




{Data?.map((rec)=>
(

 <Trend cards={rec}/>

      
))}



</div>


    </div>
  )
}

export default Search
