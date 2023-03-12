import React, {  useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Context'
function Header() {
  const darkMode = <h3>Dark Mode</h3>
  const lightMode = <h3>Light Mode</h3>
  const obj=useContext(ThemeContext)
  const [mode, setMode] = useState(true)
  const changeMode = () => {
    setMode(!mode)
   mode? obj.setTheme(obj.themes.dark):obj.setTheme(obj.themes.light)
  }
  return (
    <div className='header d-flex justify-content-between align-items-center px-3'>
      <div className="country">
        <Link to='/'> <h1>Country</h1></Link>
      </div>
      <div className="mode" onClick={changeMode}>
        {mode ? darkMode : lightMode}
      </div>
    </div>
  )
}

export default Header
