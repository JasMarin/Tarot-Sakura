import React, {useState, useEffect, useContext} from 'react'
import { CardsContext } from '../context/CardsContext';
import {GetCards} from '../services/Functions'
import '../styles/ClowCards.css'

const defaultClowReverseImage = 'https://i.ibb.co/LJSmQ4f/Reverso-Clow.jpg';

function ClowCards ()  {
   
    const [cards, setCards] = useState(null);
    
    useEffect(()=>{
        GetCards(setCards)
     },[]);
  
    const {addToLecture} = useContext(CardsContext);
    console.log(addToLecture);
  return (
     <div className='cards-continer background'>
        {cards !== null ? (
        cards.map(card => (
          
            <div key={card.id}>
                <img className='cards-img card-animation' src={card.cardsReverse.clowReverse || defaultClowReverseImage} alt={card.spanishName} onClick={() => addToLecture(card)}/>
            </div>
         
        ))
            ) : ('No hay cards')}
     </div>
  )
}

export default ClowCards