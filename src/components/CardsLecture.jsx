import React, { useContext} from 'react'
import { CardsContext } from '../context/CardsContext';
import '../styles/CardsLecture.css'

function CardsLecture() {
    const {cardsItems} = useContext(CardsContext);
    console.log(cardsItems);
  return (
    <div className='lecture-continer background'>

        {cardsItems && cardsItems.length === 0 ? (
            <p>No has seleccionado ninguna carta aún.</p>
        ) : (
            <>
            
                {cardsItems.map((card, index) => (
                    <div className='lecture-content' key={index}>
                        <p className='prediction-date'>{index === 0 ? ('Pasado') : index === 1 ? ('Presente') : ('Fururo')}</p>
                        <img className='lecture-img' src={card.clowCard} alt={card.spanishName}/>
                        <p className='card-name text-background'><span>{card.spanishName}</span><span>{card.kanji}</span></p>
                        <p className='meaning text-background'>{card.meaning}</p>
                    </div>
                ))}
            </>
        )}
    </div>
  )
}

export default CardsLecture