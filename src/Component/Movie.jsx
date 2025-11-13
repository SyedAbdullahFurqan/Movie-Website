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
 
<div className="min-h-screen flex flex-col items-center pt-24 px-4 ">
  {/* Header */}
  <h1 className="text-3xl font-bold mb-6">Movie Search</h1>

  {/* Search Section */}
  <div className="flex flex-col sm:flex-row items-center gap-2 mb-8">
    <input
      type="text"
      placeholder="Search a movie..."
      className="bg-white border border-gray-300 rounded-md px-3 py-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      onChange={(e) => setloot(e.target.value)}
    />
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
      onClick={enter}
    >
      Search
    </button>
  </div>

  {/* Error Message */}
  <p className="text-red-500 mb-4">{Errors.show && Errors.iserror}</p>

  {/* Movie Grid */}
  <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {Load ? (
      <div className="col-span-3 flex justify-center items-center">
        <Spinner />
      </div>
    ) : (
      movies.map((movie) => <Card key={movie.imdbID} card={movie} />)
    )}
  </div>
</div>
    </>
    
  )
}


export default Movie
