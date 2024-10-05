import React from 'react'
import './project.css'
import Recipe from '../../assets/recipe.jpg'
import Drowsiness from '../../assets/Drowsiness.jpg'
import Chinese from '../../assets/Chinese Sentiment.jpg'
import Covid from '../../assets/covid19.jpg'
import Horn from '../../assets/horn.jpg'
import Markdown from '../../assets/markdown.png'
import Task from '../../assets/Task-manager.jpg'
import BookStore from '../../assets/Bookstore.png'

const data = [
  {
    id:1,
    image: BookStore,
    title: 'Book Store',
    github: 'https://github.com/SikYinSun/Bookstore-React-SSR',
    demo: 'https://bookstore-react-ssr.onrender.com/'
  },
  {
    id:2,
    image: Task,
    title: 'Task Manager',
    github: 'https://github.com/SikYinSun/task-manager',
    demo: 'https://exquisite-chaja-b72f58.netlify.app/'
  },
  {
    id:3,
    image: Markdown,
    title: 'Markdown Live Preview',
    github: 'https://github.com/SikYinSun/markdown-previewer',
    demo: 'https://mellow-naiad-5c8450.netlify.app/'
  },
  {
    id:4,
    image: Recipe,
    title: 'No Time To Cook',
    github: 'https://github.com/cse110-fa21-group3/cse110-fa21-group3',
    demo: 'https://www.youtube.com/watch?v=FAJv7m4iheM'
  },
  {
    id:5,
    image: Drowsiness,
    title: 'Drowsiness Detection',
    github: 'https://github.com/SikYinSun/Drowsiness-Detection-Deployment',
    demo: ''
  },
  {
    id:6,
    image: Chinese,
    title: 'Chinese Sentiment Analysis',
    github: 'https://github.com/SikYinSun/Chinese-Sentiment-Analysis',
    demo: 'https://sikyinsun.github.io/Chinese-Sentiment-Analysis/'
  },
  {
    id:7,
    image: Covid,
    title: 'Covid-19 Detection',
    github: 'https://github.com/SikYinSun/COVID-19-Detection/tree/main',
    demo: 'https://sikyinsun.github.io/COVID-19-Detection/'
  },
  {
    id:8,
    image: Horn,
    title: 'EventListener',
    github: 'https://github.com/SikYinSun/EventListener',
    demo: 'https://sikyinsun.github.io/EventListener/expose.html'
  }
]


export default function Project() {
  return (
    <section id='project' className='project-section'>
      <h5>My Recent Work</h5>
      <h2>PortFolio</h2>
      
      <div className="container protfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio_item-btn'> 
                <a href={github} className='btn' target='noreferrer'>Github</a>
                {demo.length > 1 && <a href={demo} className='btn btn-primary' target='noreferrer'>Demo</a>}
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
