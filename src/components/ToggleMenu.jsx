import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/ToggleMenu.css'

function ToggleMenu() {
    const [hiddenMenu, setHiddenMenu] = useState(true);
  return (
    <nav>
        <div className='menu' onClick={() => setHiddenMenu(!hiddenMenu)}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <ul className={`toggle-menu ${(hiddenMenu ? '' : 'active')}`}>
            <li><Link to={'/'}>Inicio</Link></li>
            <li><Link to={'/secondpage'}>Clow</Link></li>
            <li><Link to={'/thirdpage'}>Sakura</Link></li>
        </ul>
    </nav>
  )
}

export default ToggleMenu