import React, {useState, useEffect} from 'react'
import {GetCards} from '../services/Functions'
import '../styles/ClowCards.css'


function ClowCards() {
    const [cards, setCards] = useState(null);

    useEffect(()=>{
        GetCards(setCards)
      },[]);
    

  return (
    <div className='cards-continer'>
        {cards !== null ? (
        cards.map(card => (
          
            <div key={card.id}>
                <img className='cards-img' src={card.cardsReverse.clowReverse} alt={card.spanishName}/>
            </div>
         
        ))
            ) : ('No hay cards')}
    </div>
  )
}

export default ClowCards