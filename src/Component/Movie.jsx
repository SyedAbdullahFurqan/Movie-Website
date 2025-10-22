import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';


import {Cont} from "../Context/Slice"


const Movie = ({children}) => {
  const [click, setclick] = useState("titanic");
  ;const [Errors, setErrors] = useState({ show:false,   iserror:""});
   // const [movies, setMovies] = useState([]);
   const { movies, setMovies } = useContext(Cont)
    const [Load, setLoad] = useState(true);
    const [loot, setloot] = useState("");




    //https://www.omdbapi.com/?s=batman&apikey=abad4a69

    //https://www.omdbapi.com/?s=SpiderMan&totalResults&apikey=abad4a69
    const api = async () => {
    
      const res = await fetch(`https://www.omdbapi.com/?&s=${click}&apikey=abad4a69`);
      const data = await res.json();
      console.log(data); setLoad(false)
      console.log(data.Error)
  if (data.Response==="True") {
    setMovies(data.Search); // <-- This is an array

  }
    
  else if (data.Response==="False") {
    setErrors({  show:true,   iserror:data.Error
  })

  }


      
      
    
  console.log(Errors)
    };
  function enter(params) {
    setclick(loot)
    console.log("click")
  }

    console.log(loot)

    useEffect(() => {
      api();
    }, [click]);



    return (
      <>

  

  <Cont.Provider value={{movies}}>

  {children }


  </Cont.Provider>
        <div className='text-center'>
          <h1 className=''>Movie Search</h1>

    
          <input type="text" className='bg-amber-50' onChange={(e) => setloot(e.target.value)}  />
          <button  className='bg-amber-50' onClick={enter}           >search</button>
  <p>{Errors.show &&  Errors.iserror}</p>
        </div>
        <div className='read md:'>
          {Load ? <Spinner /> : movies.map((movie) =>{
          
  return(

            <Card card={movie} />

        )})}</div>

     
    </>
    
  )
}

export default Movie
