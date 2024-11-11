import React from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
        <NavLink className={({isActive})=>isActive?"active":""} to='/'>Home</NavLink>
        </li>
        <li className="navbar-item">
        <NavLink className={({isActive})=>isActive?"active":""} to='/about'>About</NavLink>
        </li>
        <li className="navbar-item">
        <NavLink className={({isActive})=>isActive?"active":""} to='/dashboard'>Dashboard</NavLink>
        </li>
        <li className="navbar-item">
        <NavLink className={({isActive})=>isActive?"active":""} to='/student-detail/10'>Student</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
