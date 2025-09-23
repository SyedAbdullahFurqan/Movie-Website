import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
import Spinner from './Component/Spinner'
import Head from './Head'
import {Cont} from './Context/Slice'
import Movie from './Component/Movie'
import Mobile from './Mobile'
const Single = () => {

  return (
    <div>
      <Navbar/>

<Outlet/>
    
<div className='block md:hidden mt-7 '>
< Mobile />
    </div>
    </div>
  )
}

export default Single
