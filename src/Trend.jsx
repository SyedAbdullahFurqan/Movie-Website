import React from 'react'

import {useDispatch,useSelector}from 'react-redux'
import { NavLink } from 'react-router-dom'

const Trend = ({cards}) => {

const ids=cards.id
const expolre=cards.media_type

  const urls= useSelector(state => state.counter.imga)
  const handleScroll = () => {
    const section = document.getElementById("HOME");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      
<NavLink    onClick={handleScroll}
        style={{
         
          cursor: "pointer",
        }} to={`/${expolre ||"movie"}/${ids}  `}>
<div className='mt-5 '>

<img src={urls+cards.backdrop_path}  alt="img not found" className="h-40 w-full object-cover rounded"/>


<h5 className='text-amber-100 pt-3 '>{cards.title || cards.name
}</h5>
<div className='flex flex-col  sm:flex-row'>
    <span className=''>Realse Date : {cards.release_date || cards.first_air_date    
}</span>
    <span className='sm:ml-6'>vote: {cards.vote_average
}</span>
</div>


</div>
</NavLink>
    </>
  )
}

export default Trend
