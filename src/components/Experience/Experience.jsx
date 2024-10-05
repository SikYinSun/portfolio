import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

export default function Experience() {
  return (
    <section id='experience'>
      <h5>Skills that I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_program">
          <h3>Programming Languages</h3>
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
                <h4>TypeScript</h4>
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
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_framework">
        <h3>Framework/Tool</h3>
          <div className="experience_content">
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>JDBC</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Jira</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>CI/CD</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>RESTful API</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_platform">
        <h3>Platfrom/Database</h3>
          <div className="experience_content">
            <article className='experience_detail'>
                <BsFillPatchCheckFill className='experience_detail_icon' />
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
            </article>
            <article className='experience_detail'>
                <BsFillPatchCheckFill className='experience_detail_icon' />
                <div>
                  <h4>Azure</h4>
                  <small className='text-light'>Basic</small>
                </div>
            </article>
            <article className='experience_detail'>
                <BsFillPatchCheckFill className='experience_detail_icon' />
                <div>
                  <h4>Docker</h4>
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
                <h4>RDBMS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsFillPatchCheckFill className='experience_detail_icon' />
              <div>
                <h4>Linux</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}
