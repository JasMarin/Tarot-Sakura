import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Main.css'
import cartaClow from '../assets/img/reverso-clow.jpg'
import cartaSakura from '../assets/img/reverso-sakura.jpg'



function Main() {
  return (
    <div className='main background'>
        <div className='caja-carta'>
          <Link className='reverso-carta-clow' to ='/secondpage'><img src={cartaClow} alt='Reverso carta clow.'/></Link>
          <h3 className='text-clow'><Link to='/secondpage'>Clow</Link></h3>
        </div>
        <div className='caja-carta'>
        <Link to='/thirdpage'><img src={cartaSakura} alt='Reverso carta sakura.'/></Link>
        <h3><Link to="/thirdpage">Sakura</Link></h3>
        </div>
    </div>
  )
}

export default Main