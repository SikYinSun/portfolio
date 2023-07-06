import React from 'react'
import './nav.css'
import {TbHome2} from 'react-icons/tb'
import {FaUser} from 'react-icons/fa'
import {AiOutlineProject} from 'react-icons/ai'
import {FaBusinessTime} from 'react-icons/fa'
import {TbMessage} from 'react-icons/tb'
import { useState } from 'react'

export default function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><TbHome2 /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBusinessTime /></a>
      <a href='#project' onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineProject /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage /></a>
    </nav>
  )
}
