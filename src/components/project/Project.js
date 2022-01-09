import React from 'react'

export const Project = ({img,title,desc,link}) => {
    const [show, setshow] = useState(false)
    return (
        <a href={link}>
            <div className='projects' onMouseEnter={()=> setshow=(true)} onMouseLeave={()=>setshow(false)} >
                { show ? (<div><h4>{title}</h4><p>{desc}</p> </div>):( <img src={img} alt=''/>  )}
                </div>
        </a>
    )
}
