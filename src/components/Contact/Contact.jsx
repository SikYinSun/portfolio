import React from 'react'
import './contact.css'
import {HiOutlineMailOpen} from "react-icons/hi"
import {HiOutlineDocumentDownload} from "react-icons/hi"
import CV from '../../assets/Samuels_Resume.pdf'

export default function Contact() {
  return (
    <section id='contact' className='contact_section'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact_container">
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMailOpen className='contact_icon'/>
            <h4>Email</h4>
            <h5>samuelssun0505@gmail.com</h5>
            <a href="mailto:samuelssun0505@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <HiOutlineDocumentDownload className='contact_icon'/>
            <h4>CV</h4>
            <h5>PDF CV</h5>
            <a href={CV}>Download CV</a>
          </article>
        </div>
      </div>
    </section>
  )
}
