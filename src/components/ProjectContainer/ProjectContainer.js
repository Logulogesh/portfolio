import React from 'react'
import { Element } from 'react-scroll'
import './ProjectContainer.css'

export const ProjectContainer = () => {
    // const project=[
    //     {
    //         img:'https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg',
    //         title:'picture',
    //         desc:'system projects',
    //         link:'www.google.com'
    //     },
    //     {
    //         img:'https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg',
    //         title:'picture',
    //         desc:'system projects',
    //         link:'www.google.com'
    //     },
    //     {
    //         img:'https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg',
    //         title:'picture',
    //         desc:'system projects',
    //         link:'www.google.com'
    //     },
    //     {
    //         img:'https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg',
    //         title:'picture',
    //         desc:'system projects',
    //         link:'www.google.com'
    //     },
    //     {
    //         img:'https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg',
    //         title:'picture',
    //         desc:'system projects',
    //         link:'www.google.com'
    //     },
    //     {
    //         img:'https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg',
    //         title:'picture',
    //         desc:'system projects',
    //         link:'www.google.com'
    //     }

    // ]
    return (
       <Element id='projects' className='projectcontainer'>
           <h1>Projec<span>ts</span></h1>
           <p>It's prepare for some related domain and refers to create a new work </p>
           <div className='projectcontainer_projects'>
               {/* {project.map((Project,index) => {
                   return(
                      <projects
                      key={index}
                      img={Project.img}
                
                      />
                   )
               })} */}

           </div>
       </Element>
    )
}
