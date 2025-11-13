import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import './Navbar.css'





const Navbar = () => {
const naviage=useNavigate()
const [Searchs, setSearchs] = useState(" ");


useEffect(() => {
  if (Searchs && Searchs.trim() !== "") {
    naviage(`/search?query=${Searchs}`);
  }
}, [Searchs]);
  return (
    < >
    <div className='     bg-transparent relative '>
<nav className=' fixed  top-0 left-0 z-50 bg-neutral-900  w-full flex  items-center justify-between  '>


<NavLink to={"/"} className={"mb-6 text-3xl ml-4"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } } >Movie</NavLink>


<ul className='flex  items-center flex-col  sm:flex-row  mb-7 mr-6 md:items-center'>

    <li className='px-6'>
        <NavLink to={"/home"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } } >All series</NavLink>
    </li>

    <li className='px-6'> 
        <NavLink to={"/About"}  style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } }>Tv Show</NavLink>
    
    </li>
  
    <li className='px-6'>
        <NavLink to={"/Contact"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } }>Movies</NavLink>
    </li>

<div>

<input type="text" placeholder='Search' className=' bg-white my-4'  onChange={(e) => setSearchs(e.target.value)} value={Searchs} />

</div>
</ul>





</nav>


   
</div>

    </>
  )
}

export default Navbar
