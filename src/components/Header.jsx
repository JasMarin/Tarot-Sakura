import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Header.css'
import cristalBall from '../assets/img/cristal_ball.png'
import ToggleMenu from './ToggleMenu';



function Header(props) {
  return (
    <div className='header'>
       <Link className='crystal-ball' to={'/lecturepage'}><img src={cristalBall} alt='bola de cristal'/></Link>
       <h2 className='titles'>{props.title}</h2>
        <ToggleMenu/>
    </div>
  )
}

export default Header;