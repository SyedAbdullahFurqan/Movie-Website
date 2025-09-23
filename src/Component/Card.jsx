import React from 'react'
import './furqan.css'
import { NavLink, useParams } from 'react-router-dom'

const Card = ({card}) => {
console.log(card)

const {imdbID}=card
const id =useParams()

  return (
    <>
     
<div className='containersss'>
   <h1 className=''> </h1>
<img src={card.Poster} alt=""  className=''/>
 <div className='content'>

        <h1> Name: {card.Title}</h1>
        <h4> Type: {card.Type}</h4>
           <p >Year: {card.Year}</p>
           </div>
<NavLink to={`/home/${imdbID}`}>
           <button  >Watch Movie</button>
</NavLink>


          
      </div>
    
    </>
  )
}

export default Card
