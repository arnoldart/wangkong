import React from 'react'
import './style.css'
import {ReactComponent as Bell} from '../../img/bell 1.svg'
import {ReactComponent as Drop} from '../../img/chevron-down 1.svg'
import  Avatar from '../../img/avatar.png'
import Kalender from './kalender/Kalender'

function Right() {
    return (
        <div className="container2">
            <div className="bell">
                <div className="bell__inner">
                    <Bell className="icon" />
                  
                </div>
                <div className="avatar__inner">
                    <img src={Avatar} className="avatar"></img>
                    <Drop className="icon"/>
                </div>
            </div>

            <Kalender />
        </div>
    )
}

export default Right
