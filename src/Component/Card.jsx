import React, { useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'

const Card = ({card}) => {
console.log(card)
const [loot, setloot] = useState("");
const {imdbID}=card
const id =useParams()

  return (
    <>
 
 {/* <input type="text" className='bg-amber-50' onChange={(e) => setloot(e.target.value)}  />
          <button  className='bg-amber-50' onClick={enter}           >search</button> */}
<div className="border-2 border-amber-50 rounded-3xl  shadow-md p-4 flex flex-col items-center text-center">
  <img
    src={card.Poster}
    alt={card.Title}
    className="w-40 h-56 object-cover rounded-md mb-3"
  />
  <h1 className="font-semibold text-lg">{card.Title}</h1>
  <h4 className="text-gray-600">Type: {card.Type}</h4>
  <p className="text-gray-500">Year: {card.Year}</p>

  <NavLink to={`/home/${card.imdbID}`}>
    <button className="mt-3 bg-blue-500 text-white px-3 py-1 cursor-pointer rounded-md hover:bg-blue-600 transition">
      Watch Movie
    </button>
  </NavLink>
</div>

    
    </>
  )
}

export default Card
