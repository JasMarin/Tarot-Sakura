import React from 'react'
import '../styles/Main.css'
import cartaClow from '../assets/img/reverso-clow.jpg'
import cartaSakura from '../assets/img/reverso-sakura.jpg'


function Main() {
  return (
    <div className='main'>
        <div className='caja-carta'>
        <a className='reverso-carta-clow' href='/secondpage'><img src={cartaClow} alt='Reverso carta clow.'/></a>
        <h3 className='text-clow'><a href='/secondpage'>Clow</a></h3>
        </div>
        <div className='caja-carta'>
        <a><img src={cartaSakura} href='/' alt='Reverso carta sakura.'/></a>
        <h3><a href="/">Sakura</a></h3>
        </div>
    </div>
  )
}

export default Main