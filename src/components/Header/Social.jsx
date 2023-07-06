import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function Social() {
  return (
    <div className='header_social'>
      <a href="https://www.linkedin.com/in/sik-yin-sun-294b91258/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/SikYinSun" target='_blank'><BsGithub /></a>
    </div>
  )
}
