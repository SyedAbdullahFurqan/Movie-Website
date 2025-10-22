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
<nav className='  flex  items-center justify-between  '>

<div className='logo text-2xl ml-3 '>
<NavLink to={"/"} className={"move"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } } >Movie</NavLink>
</div>
<div className=' hidden md:block'>
<ul className='flex   flex-col  md:flex-row  mb-7 mr-6 md:items-center'>

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

<input type="text" placeholder='  search' className=' bg-amber-50 my-4'  onChange={(e) => setSearchs(e.target.value)} value={Searchs} />

</div>
</ul>




</div>
</nav>


   
</div>

    </>
  )
}

export default Navbar
