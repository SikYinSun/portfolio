import React from 'react'
import './about.css'
import ME from '../../assets/about.png'
import {IoLocationSharp} from 'react-icons/io5'

export default function About() {
  return (
    <section id='about' className='about_section'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className='about_content'>
          <h2>A dedicated Full-Stack Developer based in Toronto, Ontario <IoLocationSharp /></h2>

          <p>
            As a skilled full-stack developer, my expertise spans across both 
            front-end and back-end technologies. With proficiency in HTML, CSS, JavaScript, React, 
            and a strong command of a back-end language like JavaScript, Python and Java, I specialize in developing 
            robust web applications. My focus is on building scalable and efficient systems, 
            implementing complex functionality, and ensuring a seamless user experience. Leveraging my 
            problem-solving skills and knowledge of cutting-edge development tools, I thrive in 
            collaborative environments, working closely with cross-functional teams to deliver 
            high-quality solutions that meet and exceed client expectations. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
