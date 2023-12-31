import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
	return (
		<header className="header ">
			<h1>MovieClub</h1>
			<nav>
				<NavLink to="/" end>
					Início
				</NavLink>
				<NavLink to="/about">Sobre</NavLink>
				<NavLink to="/profile/me">Perfil</NavLink>
			</nav>
		</header>
	)
}

export default Header
