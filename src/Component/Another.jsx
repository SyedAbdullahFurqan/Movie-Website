import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import "./another.css"
import Movie from './Movie';
import Card from './Card';
import {Cont} from "../Context/Slice"

const Another = ({params}) => {
  const { movies } = useContext(Cont)
// const full= useContext(Cont)
// console.log(full)
  const par= useParams()

const id=par.imdbID

 const [move, SetMove] = useState("");

const [Image, setImage] = useState("");

const [Control, setControl] = useState(true);

   const [Spinner, setSpinner] = useState(true);

const back= useNavigate()



function go(params) {
  back(-1)
}

  useEffect(() => {
  
  const app = async () => {
    const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=abad4a69`);
    const data = await res.json();
    console.log(data)
 
   SetMove(data)
  };


  app()
  }, [id]);
const style={
margin:"0px auto",
 width:"600px",
  height:"100vh",
  backgroundImage:`url(${move.
Poster
})`,
backgroundSize:"contain",
backgroundRepeat:"no-repeat",
backgroundPosition:"center"

}

function video(params) {
  setControl(true)
}



  return (
    <div>
<section >
  <div className='back'>


  <div className='tit'>
<h1>Titanic</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quae.</p>
<p> Rating : {move.
imdbRating
}</p>
 <span>{move.imdbVotes
} Votes </span>
 <p>{move.
Runtime
}</p>
 <button>{move.
Genre}</button>
 </div>




</div>
 <div className='contents' >
  <img src={move.Poster} alt=""  style={{width:"200px"}}/>
<h1>{move.Title}</h1>
        
        <h4> Type: {move.Type}</h4>
           <p >Year: {move.Year}</p>
<button onClick={video}>play now</button>
<button onClick={()=> setControl(false)}>close</button>

           </div>
{Control &&  <video controls className=''>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            
            </video> 

}


          <div>

<button onClick={go} className='text-amber-50'>GO BACK</button>

            <h1>Simliar Movie</h1>

<div className='cardss'>
{movies.map((sim)=>{
  console.log(sim)
  
return(
  
  <>
  
  <div className='containerss ' >
   
<img src={sim.Poster} className='inline-block' alt=""  />
 <div className='contentss' >

        <h1> Name: {sim.Title}</h1>
        <h4> Type: {sim.Type}</h4>
           <p >Year: {sim.Year}</p>
           </div>
    </div>
  
  </>
  
)

})}
  </div>
          </div>





</section>
    </div>  
  )
}

export default Another
