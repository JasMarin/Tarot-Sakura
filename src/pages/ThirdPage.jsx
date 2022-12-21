import React from 'react'
import Header from '../components/Header'
import SakuraCards from '../components/SakuraCards'
import { CardsProvider } from '../context/CardsContext'



function ThirdPage() {
  return (
    <CardsProvider>
        <Header title = 'Cartas Sakura'/>
        <SakuraCards/>
    </CardsProvider>
  )
}


export default ThirdPage