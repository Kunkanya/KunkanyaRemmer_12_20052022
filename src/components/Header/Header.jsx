import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Logo from '../../asset/logo.png'

/**
 * @description Horizontal navigation bar.
 * 
 * @component
 * @returns { HTMLElement } Return header navigation bar.
 */
const Header = () => {
  return (
    <>
      <header>
        <Link to={'/'}>
          <img src={Logo} alt="logo" />
        </Link>
        <nav className="nav-horizontal">
          <Link to={'/'}><h3>Accueil</h3></Link>
          <h3>Profil</h3>
          <h3>Réglage</h3>
          <h3>Communauté</h3>
        </nav>
      </header>
    </>
  )
}

export default Header
