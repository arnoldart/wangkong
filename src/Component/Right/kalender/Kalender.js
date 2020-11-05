import React from 'react'
import './style.css'
import {ReactComponent as Cleft} from '../../../img/chevron-left 1.svg'
import {ReactComponent as Cright} from '../../../img/chevron-right 1.svg'
import kalender from '../../../img/kalender.png'
import Grafik from '../../../img/grafik.png'

function Kalender() {
    return (
        <div className="kalender">
            <div className="tanggal">
                <div>
                    <h3>December 2020</h3>
                </div>
                <aside className="chev__inner">
                    <Cleft className="icon2"/>
                    <Cright className="icon2"/>
                </aside>
            </div>
            <div className="kalender__inner">
                <img src={kalender}></img>
            </div>
            <div className="kalender__inner">
                <img src={Grafik}></img>
            </div>
        </div>
    )
}

export default Kalender
