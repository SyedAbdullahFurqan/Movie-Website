import React from 'react'
import { NavLink } from 'react-router-dom'

const Mobile = () => {
  return (
    <div className='bg-neutral-800  z-40 w-full fixed bottom-0 right-0'>
      <nav className=' flex  items-center justify-center  '>



<ul className='flex  py-2 md:items-center'>
    <li className='px-6'>
        <NavLink to={"/"} style={({isActive})=>{

return{color:isActive ?"red":"white",}
        } } >Movie</NavLink>
    </li>
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
        } }>Movie</NavLink>
    </li>


</ul>


</nav>


   
    </div>
  )
}

export default Mobile
