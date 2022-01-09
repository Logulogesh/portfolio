import React from 'react'
import {Element} from 'react-scroll'
import skilling from '../../assets/HERO.jpg'
import './SkillContainer.css'
import { LinearProgress } from '@material-ui/core';

export const SkillContainer = () => {
    return (
        <Element className='skills_container' id='skills'>
             <div className='skills_image'>
               <img src={skilling} alt='' />
            </div> 
            <div className='skills_set'>
                <h2>SKILL SET</h2>
                <div className='react_slider' >
                  <h4>React</h4>
                   <div className='react_slider slider1'>
                     <LinearProgress variant="determinate" value={60} />
                   </div>
                </div>
                <div className='react_slider' >
                  <h4>node</h4>
                   <div className='react_slider slider2'>
                     <LinearProgress variant="determinate" value={30} />
                   </div>
                </div>
                <div className='react_slider' >
                  <h4>mysql</h4>
                   <div className='react_slider slider3'>
                     <LinearProgress variant="determinate" value={50} />
                   </div>
                </div>
                <div className='react_slider' >
                  <h4>Reactnative</h4>
                   <div className='react_slider slider4'>
                     <LinearProgress variant="determinate" value={10} />
                   </div>
                </div>
            </div>
        </Element>
    )
}
