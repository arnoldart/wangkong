import React from 'react'
import './main.css'
import {ReactComponent as Search} from '../../img/search.svg'
import {ReactComponent as Down} from '../../img/chevron-down 1.svg'
import {ReactComponent as Chae} from '../../img/chae.svg'
import {ReactComponent as Clock} from '../../img/clock.svg'
import {ReactComponent as Ex} from '../../img/x 1.svg'
import {ReactComponent as Check} from '../../img/check 1.svg'
import Senja from '../../img/senja.png'
import Orang from '../../img/orang.png'
import  Shark from '../../img/shark.png'

function Main() {
    return (
        <div className="main">
            <div className="search1">
                <div className="search__bar">
                    <Search className="search__icon"/>
                    <input type="text" placeholder="search" className="search__input"/>
                </div>
                <div className="option">
                    <select className="drop">
                        <option value="0">This Month</option>
                        <option value="1">last Month</option>
                        <option value="2">Past 2 Month</option>
                    </select>
                    <Down className="option__drop"/>
                </div>
            </div>
            <div className="summary">
                <h1>My Summary</h1>
                <Chae className="summary__img"/>
            </div>
            <div className="meeting">
                <div>
                    <h3>Next Meeting</h3>
                    <div className="meeting__item">
                        <aside className="icon">
                            <img src={Shark}></img>
                        </aside>
                        <div className="meeting__text">
                            <h4>Ikan Hiu Makan Tomat</h4>
                            <p>Weekly team meeting</p>
                        </div>
                    </div>
                    <div className="coba">
                        <div className="meeting__item">
                            <aside className="icon">
                                <Clock className="clock"/>
                            </aside>
                            <div className="meeting__text2">
                                <p>09:00 - 10:00</p>
                            </div>
                        </div>
                        <div className="meeting__item">
                            <div className="icon__item">
                                <img src={Orang} className="orang__meeting"></img>
                                <img src={Orang} className="orang__meeting2"></img>
                                <img src={Orang} className="orang__meeting3"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <div className="meeting__item">
                        <aside className="icon">
                            <img src={Senja}></img>
                        </aside>
                        <div className="meeting__text">
                            <h4>Senja kala sepi</h4>
                            <p>Project plan</p>
                        </div>
                    </div>
                    <div className="coba">
                        <div className="meeting__item">
                            <aside className="icon">
                                <Clock className="clock"/>
                            </aside>
                            <div className="meeting__text2">
                                <p>09:00 - 10:00</p>
                            </div>
                        </div>
                        <div className="meeting__item">
                            <div className="icon__item">
                                <img src={Orang} className="orang__meeting2"></img>
                                <img src={Orang} className="orang__meeting3"></img>
                            </div>
                        </div>
                    </div>
                    <div className="call">
                        <div className="call_box">
                            <button type="submit" className="call__button2">
                                <Ex className="icon__call2"/>
                                <p>Decline</p>
                            </button>
                        </div>
                        <div className="call_box2">
                            <button type="submit" className="call__button">
                                <Check className="icon__call"/>
                                <p>Join</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
