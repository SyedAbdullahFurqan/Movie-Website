import React from 'react'
import './furqan.css'
import { NavLink, useParams } from 'react-router-dom'

const Card = ({card}) => {
console.log(card)

const {imdbID}=card
const id =useParams()

  return (
    <>
<div className=" border-amber-50  border-2 rounded-xl shadow-md p-4 flex flex-col items-center text-center">
  <img
    src={card.Poster}
    alt={card.Title}
    className="w-40 h-56 object-cover rounded-md mb-3"
  />
  <h1 className="font-semibold text-lg">{card.Title}</h1>
  <h4 className="text-gray-600">Type: {card.Type}</h4>
  <p className="text-gray-500">Year: {card.Year}</p>

  <NavLink to={`/home/${card.imdbID}`}>
    <button className="mt-3 bg-blue-500 cursor-pointer text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
      Watch Movie
    </button>
  </NavLink>
</div>
    
    </>
  )
}

export default Card
