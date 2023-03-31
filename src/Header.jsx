import React from 'react'
import logo3 from './assets/logo3.png'
import {Link }from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <img src={logo3} alt="" className='logo1'/>
      <nav className='nav'>
        <li>
          <Link to='/'>
          Home
          </Link>
        </li>

        <li>
          <Link to='/Recipe'>
          Recipes
          </Link>
        </li>

        <li>
          <Link>
          Liked Recipes
          </Link>
        </li>

      </nav>
      <div className='input'>
        <input typeof='text' placeholder='search recipe'/>
        <button>Search</button>
      </div>

    </div>
  )
}

export default Header