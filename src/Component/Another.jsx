import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


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

 <div className='h-screen flex flex-col items-center pt-24  w-100 m-auto border-2 border-amber-50 rounded-3xl text-center' >
  <img src={move.Poster} alt="" className='w-fit '/>
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

<button onClick={go} className='text-amber-50 cursor-pointer'>GO BACK</button>

            <h1>Simliar Movie</h1>

<div className='cardss'>
{movies.map((sim)=>{
  console.log(sim)
  
return(
  
  <>
  
  <div className=' border-2 border-amber-50 rounded-3xl mx-3 ' >
   
<img src={sim.Poster} className='w-fit  m-auto' alt=""  />
 <div className=' text-center' >

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
