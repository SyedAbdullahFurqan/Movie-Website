import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Mobile = () => {
    const naviage=useNavigate()
    const [Searchs, setSearchs] = useState(" ");
    
    
    useEffect(() => {
      if (Searchs && Searchs.trim() !== "") {
        naviage(`/search?query=${Searchs}`);
      }
    }, [Searchs]);
  return (
    <div className='bg-neutral-800  z-40 w-full fixed bottom-0 right-0'>
      <nav className=' flex  items-center justify-center  '>



<ul className='flex gap-4 py-2 md:items-center'>
    <li className='ms-2'>
        <NavLink to={"/"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } } >Movie</NavLink>
    </li>
    <li className=''>
        <NavLink to={"/home"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } } >All series</NavLink>
    </li>

    <li className=''> 
        <NavLink to={"/About"}  style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } }>Tv Show</NavLink>
    
    </li>
  
    <li className='mx-2'>
        <NavLink to={"/Contact"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } }>Movie</NavLink>
    </li>


</ul>

<div>

<input type="text" placeholder='Search' className=' bg-white my-4 w-[100%]'  onChange={(e) => setSearchs(e.target.value)} value={Searchs} />

</div>
</nav>


   
    </div>
  )
}

export default Mobile
