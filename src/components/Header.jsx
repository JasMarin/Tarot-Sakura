import React from 'react'
import '../styles/Header.css'
import cristalBall from '../assets/img/cristal_ball.png'

function Header(props) {
  return (
    <div className='header'>
       <a className='crystal-ball' href='/'><img src={cristalBall} alt='bola de cristal'/></a>
        <h1>Tarot Sakura</h1>
        <div className='menu'>
        <i className="fa-solid fa-bars"></i>
        </div>
        
    </div>
  )
}

export default Header;