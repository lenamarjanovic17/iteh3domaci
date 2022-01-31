import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Grafik</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/kalkulator' className='nav-link'>Kalkulator</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
