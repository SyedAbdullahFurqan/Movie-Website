import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Navbar from './Navbar';
import About from './About';
import   Contacts  from './Component/Contact'
import Single from './Single';
import Erroer from './Error/Erroer';
import Movie from './Component/Movie';
import {QueryClient, QueryClientProvider, useQuery, useQueryClient} from '@tanstack/react-query'
import { Cont } from './Context/Slice';

import Another from './Component/Another';
import Head from './Head';
import Separate from './Separate';
import Search from './Search';

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([]);
const clientss=new QueryClient()

const router= createBrowserRouter([
 {path:"/",

     element: <>  <Single/> </> ,

     errorElement :<>  <Erroer/> </> ,
     
children:[  
  {path:"/home",

     element: <> <Movie/>  </> 
      },

         {
        index: true, // ✅ this makes Head the default when user hits "/"
        element: <Head />,
      },
   {path:"/home/:imdbID",

     element: <Another/> 
      },
   
       {path:"/About",

     element: <About/> 
      },
  {path:"/Contact",

     element:<Contacts/>  
      },
        {path:"/search",

     element:<Search/>  
      },
      {path:"/:expolre/:ids",

     element:<Separate/>
      }
    
    
    ]
  
  
 }


      
])






  return (

    <>

<QueryClientProvider client={clientss}>

<Cont.Provider value={{ movies, setMovies }}>
<RouterProvider router={router}  >

</RouterProvider>

</Cont.Provider>

</QueryClientProvider>
     {/*<div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/} 
    </>
  )
}

export default App
