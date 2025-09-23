import React from 'react'
import { NavLink, useNavigate, useRouteError } from 'react-router-dom'


const Erroer = () => {

const err=useRouteError()
const navi=useNavigate()

function handle(params) {
    navi(-1)
}

if (err.status==404) {
    

console.log(err)
  return (
    <div>
      <h1>ERROR PAGE</h1>

<NavLink to={"/"}  >Go to home Page</NavLink>
<button onClick={handle}>go back</button>

    </div>
  )}
}

export default Erroer
