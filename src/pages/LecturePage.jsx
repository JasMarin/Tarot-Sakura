import React from 'react'
import { CardsProvider } from '../context/CardsContext'
import CardsLecture from '../components/CardsLecture'
import Header from '../components/Header'


function LecturePage() {
  return (
    <CardsProvider>
        <Header title='Lectura de Cartas'/>
        <CardsLecture/>
    </CardsProvider>
  )
}

export default LecturePage