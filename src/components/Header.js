import React from 'react'
import './Header.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="header">
        <img src={logo} alt="logo"/>
    </div>
  )
}

export default Header