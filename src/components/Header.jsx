import React from 'react'
import '../styles/Header.css'
import cristalBall from '../assets/img/cristal_ball.png'
import ToggleMenu from './ToggleMenu';



function Header(props) {
  return (
    <div className='header'>
       <a className='crystal-ball' href='/'><img src={cristalBall} alt='bola de cristal'/></a>
       <h2 className='titles'>{props.title}</h2>
        <ToggleMenu/>
    </div>
  )
}

export default Header;