import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from "react-icons/bs";
import LinearProgress from '@mui/material/LinearProgress';
import {experience_Data} from './Experience_Data'


const Experience = () => {
  return (
    <section id='experience'>
      <h2 className='experience_header'>My Experience</h2>

      <div className='container experience__container'>

        {/*==== FRONTEND ====*/}
        <div className='experience__frontend'>
          <h3 className='develoent'>Kenntnisse</h3>
          <div className='experience__content'>

          {
          experience_Data.map(({id, title, value}) => {
            return(
              <article key={id} className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  {/* ========== Skillbar ==========*/}
                  <h4>{title}</h4>
                  <LinearProgress sx={{width: '100%', height: '10px'}} variant="determinate" value={value} />
                </div>
              </article>
            )
          })
          }


          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience