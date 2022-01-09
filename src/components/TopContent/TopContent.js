import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css'

export const TopContent = () => {
    return (
        <div className='topcontent'>
            <div className='topcontent_right'> 
                <h1>Logesh</h1>
                <p>professional web devoloper</p>
                <a href='www.google.com'>
                <button className='topcontent_download'>Download cv</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                <button className='topcontent_mywork'>My Work</button></Link>
             </div>
        </div>
    )
}
