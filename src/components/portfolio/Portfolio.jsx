import React from 'react'
import './Portfolio.css'
import DonutGIF from '../../assets/Portfolio/Donat.gif'
import HTML from '../../assets/Portfolio/HTML-Webseite1.png'
import MatrazeGIF from '../../assets/Portfolio/Matraze.gif'
import MazeGame from '../../assets/Portfolio/MazeGame.png'
import VRLL from '../../assets/Portfolio/vrll_logo1.PNG'
import WebseiteGif from '../../assets/Portfolio/ReactWebseite2.gif'



const portfolioData = [
  {
    id: 1,
    image: DonutGIF,
    title: '3D Blender Donut',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: HTML,
    title: 'HTML Webseite',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: MatrazeGIF,
    title: '3D Blender Matraze',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 4,
    image: MazeGame,
    title: 'Das verrückte Labyrint',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 5,
    image: VRLL,
    title: 'VR Lab Linking',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 6,
    image: WebseiteGif,
    title: 'Meine erste React Webseite',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2> Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })

          
        }

      </div>
    </section>
  )
}

export default Portfolio