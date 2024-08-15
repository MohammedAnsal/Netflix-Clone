import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import serch_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_icon from "../../assets/profile_img.png"
import drop_down from '../../assets/caret_icon.svg'
import {logOut} from '../../firebase'


const Navbar = () => {

  /*----{Using UseRef and UseEffect for navbar adding style}----*/

  const navRef = useRef()

  useEffect(() => {

    window.addEventListener('scroll', () => {
      
      if (window.scrollY >= 80) {
        
        navRef.current.classList.add('nav-dark')

      } else {

        navRef.current.classList.remove('nav-dark')

      }

    })

  } , [])

  return (
    
    <div className='navbar' ref={navRef}>

      <div className="navbar-left">

        <img src={logo} alt="" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Populer</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>

      </div> 

      <div className="navbar-right">

        <img className='icons' src={serch_icon} alt="" />
        <p>Children</p>
        <img className='icons' src={bell_icon} alt="" />

        <div className="navbar-profile">
          <img className='profile' src={profile_icon} alt="" />
          <img src={drop_down} alt="" />
          
          <div className="dropdown">
              <p onClick={() => {logOut()}}>Sign Out</p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Navbar
