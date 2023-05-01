import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png';

const Header = () => {
  const [theme, setTheme] = useState("light");
  useEffect(()=>{
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  },[theme])
  return (
    <>
      <header>
        <div className='logo'>
          <img src={logo} alt="Logo" />
          <span>ToDo List</span>
        </div>
        <div className="themeSelector">
          <span onClick={() => setTheme("light")} className="light"></span>
          <span onClick={() => setTheme("medium")} className="medium"></span>
          <span onClick={() => setTheme("dark")} className="dark"></span>
          <span onClick={() => setTheme("gOne")} className="gOne"></span>
          <span onClick={() => setTheme("gTwo")} className="gTwo"></span>
          <span onClick={() => setTheme("gThree")} className="gThree"></span>
        </div>
      </header>

    </>
  )
}

export default Header