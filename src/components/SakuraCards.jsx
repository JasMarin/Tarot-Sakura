import React, {useState, useEffect} from 'react'
import {GetCards} from '../services/Functions'

function SakuraCards() {
    const [cards, setCards] = useState(null);

    useEffect(()=>{
        GetCards(setCards)
      },[]);
  return (
        
    <div className='cards-continer'>
        {cards !== null ? (
        cards.map(card => (
          
            <div key={card.id}>
                <img className='cards-img' src={card.cardsReverse.sakuraReverse} alt={card.spanishName}/>
            </div>
         
        ))
            ) : ('No hay cards')}
        
    </div>
  )
}

export default SakuraCards