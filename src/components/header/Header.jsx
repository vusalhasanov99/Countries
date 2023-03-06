import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header({appRef}) {
  const darkMode=<h3>Dark Mode</h3>
  const lightMode=<h3>Light Mode</h3>
const [mode,setMode]=useState(true)
const changeMode = ()=>{
setMode(!mode)
mode?appRef.current.style.background="rgba(0, 0, 0,0.9)":appRef.current.style.background="#fff"
}
  return (
    <div className='header d-flex justify-content-between align-items-center px-3'>
      <div className="country">
       <Link to='/'> <h1>Country</h1></Link>
      </div>
      <div className="mode" onClick={changeMode}>
      {mode?darkMode:lightMode}
      </div>
    </div>
  )
}

export default Header
