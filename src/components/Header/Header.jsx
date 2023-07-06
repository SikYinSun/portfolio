import React from 'react'
import Social from './Social'
import Selfie from '../../assets/IMG-8442.jpg'
import './header.css'

export default function Header() {
  return (
    <header>
      <div className='container h_container'>
        <h5>Hello I'm</h5>
        <h1>Samuels Sun</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <Social/>
        
        <div className='me'>
          <img src={Selfie} alt="myself" />
        </div>
      </div>
    </header>
  )
}
