import React from 'react'
import './style.css'
import Logo from '../../img/logo.svg'
import {ReactComponent as Summary} from '../../img/summary.svg'
import {ReactComponent as Schedule} from '../../img/date.svg'
import {ReactComponent as Chat} from '../../img/chat.svg'
import {ReactComponent as Meeting} from '../../img/video.svg'
import {ReactComponent as Contact} from '../../img/contact.svg'
import {ReactComponent as Settings} from '../../img/settings.svg'
import {ReactComponent as Plus} from '../../img/plus.svg'
import Plan from '../../img/pan.svg'

function Nav() {
	return (
		<div className="menu">
			<img src={Logo} className="logo" />
			<button className="menu__button">                 
				<aside className="icon">
					<Plus />
				</aside>
				<div className="menu__text">
					<p>New Meeting</p>
				</div>
			</button>
			<div className="menu__item">
				<div className="menu__inner">
					<aside className="icon">
						<Summary />
					</aside>
					<div className="menu__text">
						<p className="active">Summary</p>
					</div>
				</div>
				<div className="menu__inner">
					<aside className="icon">
						<Schedule />
					</aside>
					<div className="menu__text">
						<p>Schedule</p>
					</div>
				</div>
				<div className="menu__inner">
					<aside className="icon">
						<Chat />
					</aside>
					<div className="menu__text">
						<p>Chat</p>
					</div>
				</div>
				<div className="menu__inner">
					<aside className="icon">
						<Meeting />
					</aside>
					<div className="menu__text">
						<p>Meeting</p>
					</div>
				</div>
				<div className="menu__inner">
					<aside className="icon">
						<Contact />
					</aside>
					<div className="menu__text">
						<p>Contact</p>
					</div>
				</div>
				<div className="menu__inner">
					<aside className="icon">
						<Settings />
					</aside>
					<div className="menu__text">
						<p>Settings</p>
					</div>
				</div>
			</div>
			<div className="planing">
				<div className="plan__text">
					<h3>Upgrade your plane</h3>
				</div>
				<aside className="plan__image">
					<img src={Plan}></img>
				</aside>
			</div>
		</div>
	)
}

export default Nav
