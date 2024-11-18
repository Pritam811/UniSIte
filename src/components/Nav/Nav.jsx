import React, { useEffect, useState } from 'react'
import './nav.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-scroll';


export const Nav = () => {
  const[nav,setNav]= useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>100? setNav(true):setNav(false)
    })
  },[])
  return (
    <nav className={`container ${nav?'fixed-bar':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
        
            <li><Link to='front' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-200} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
            <li><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
            <li><Link to='reviews' smooth={true} offset={-150} duration={500}>Reviews</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className='c-btn'>Contact</Link></li>
        </ul>
    </nav>
  )
}
