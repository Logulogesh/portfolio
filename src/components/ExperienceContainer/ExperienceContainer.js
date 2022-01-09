import React from 'react'
import { Element } from 'react-scroll'
import './ExperienceContainer.css'
import { Experience } from '../ExperienceBox/Experience'


export const ExperienceContainer = () => {
    return (
       <Element id='experience' className='experiencecontainer'>
           <h1>Experien<span>ce</span></h1>
           <div className='experience_text'>
            <Experience number='3+' title='Client'/>
            <Experience number='4+' title='Projects' style={{backgroundColor:'tomato'}}/>
            <Experience number='2+' title='Traning'/>
            <Experience number='+10' title='Learning' style={{backgroundColor:'tomato'}}/>

           </div>
       </Element>
    )
}
