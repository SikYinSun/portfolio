import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>Skills that I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>C++</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* <div className="experience_frontend">
          
        </div> */}
      </div>
    </section>
  )
}
