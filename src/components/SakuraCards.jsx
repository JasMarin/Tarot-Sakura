import React, {useState, useEffect} from 'react'
import {GetCards} from '../services/Functions'
import '../styles/SakuraCards.css'

function SakuraCards() {
    const [cards, setCards] = useState(null);

    useEffect(()=>{
        GetCards(setCards)
      },[]);
  return (
        
    <div className='sakuracards-continer background' >
        {cards !== null ? (
        cards.map(card => (
          
            <div key={card.id}>
                <img className='sakuracards-img' src={card.cardsReverse.sakuraReverse} alt={card.spanishName}/>
            </div>
         
        ))
            ) : ('No hay cards')}
        
    </div>
  )
}

export default SakuraCards