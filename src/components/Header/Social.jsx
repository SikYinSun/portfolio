import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function Social() {
  return (
    <div className='header_social'>
      <a href="https://www.linkedin.com/in/samuels-sun" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/SikYinSun" target='_blank'><BsGithub /></a>
    </div>
  )
}
