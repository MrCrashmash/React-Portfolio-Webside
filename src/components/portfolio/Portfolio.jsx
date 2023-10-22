import React from 'react'
import './Portfolio.css'


import ScrollDialog from './popupDetails/ScrollDialog'
import {portfolioData} from './Portfolio_Data'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meine neusten Projekte</h5>
      <h2 className='portfolio_header'> Portfolio</h2>

      <div className='container portfolio__container'>
        {
          portfolioData.map(({id, image, title, github, target, caller}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                    <ScrollDialog 
                      details_title={title} 
                      details_github={github}
                      details_caller={caller}
                      details_className={target}
                    /> 

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