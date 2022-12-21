import React, {useState, useEffect, useContext} from 'react'
import { CardsContext } from '../context/CardsContext';
import {GetCards} from '../services/Functions'
import '../styles/SakuraCards.css'

function SakuraCards() {
    const [cards, setCards] = useState(null);

    useEffect(()=>{
        GetCards(setCards)
      },[]);

    const {addToLecture} = useContext(CardsContext);
  return (
        
    <div className='sakuracards-continer background' >
        {cards !== null ? (
        cards.map(card => (
          
            <div key={card.id}>
                <img className='sakuracards-img card-animation' src={card.cardsReverse.sakuraReverse} alt={card.spanishName} onClick={() => addToLecture(card)}/>
            </div>
         
        ))
            ) : ('No hay cards')}
        
    </div>
  )
}

export default SakuraCards