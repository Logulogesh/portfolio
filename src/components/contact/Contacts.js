import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import {Facebook, Instagram, LinkedIn} from '@material-ui/icons'
import './Contacts.css'

export const Contacts = () => {
    return (
        <Element id='contact' className='contacts_container'>
            <h1>Conta<span>ct</span></h1>
            <div className='contacts_text'>
                <p>
                    Email:<span>vlogesh773@gmail.com</span>
                </p>
                <p>
                    GitHub:<span>@logulogesh</span> 
                </p>
                <div className='contacts_icons'>
                    <a href='www.google.com'>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                    <a href='https://www.facebook.com/logesh.logu.1675/'>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a>
                    <a href='www.google.com'>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>
                </div>
            </div>

        </Element>
    )
}
