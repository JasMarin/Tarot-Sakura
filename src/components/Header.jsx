
import React from 'react'
import '../styles/Header.css'

function Header(props) {
  return (
    <div className={props.class}>
       <a className='crystal-ball' href='#'>
        <img src= './assets/img/cristalball.jpg' alt='bola de cristal'></img>
       </a>
        <h1>Tarot Sakura</h1>
        <div className='menu'>
        <i class="fa-solid fa-bars"></i>
        </div>
        
    </div>
  )
}

export default Header;
Header.defaultProps = {
    class:"header"
   
}