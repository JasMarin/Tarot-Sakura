import React, {useState, useEffect, useContext} from 'react'
import { CardsContext } from '../context/CardsContext';
import {GetCards} from '../services/Functions'
import '../styles/ClowCards.css'


function ClowCards ()  {
   
    const [cards, setCards] = useState(null);
    console.log(addToLecture);
    useEffect(()=>{
        GetCards(setCards)
      },[]);
  
    const {addToLecture} = useContext(CardsContext);
  return (
     <div className='cards-continer background'>
        {cards !== null ? (
        cards.map(card => (
          
            <div key={card.id}>
                <img className='cards-img' src={card.cardsReverse.clowReverse} alt={card.spanishName} onClick={() => addToLecture(card)}/>
            </div>
         
        ))
            ) : ('No hay cards')}
     </div>
  )
}

export default ClowCards