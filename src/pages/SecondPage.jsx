import React from 'react'
import ClowCards from '../components/ClowCards'
import Header from '../components/Header'
import { CardsProvider } from '../context/CardsContext'

function SecondPage() {
  return (
    <CardsProvider>
        <Header/>
        <ClowCards/>
    </CardsProvider>
  )
}

export default SecondPage