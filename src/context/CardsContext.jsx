import React, {createContext, useState, useEffect} from 'react'
import Swal from 'sweetalert2'


export const CardsContext = createContext();

export const CardsProvider = ({children}) => {
    const [cardsItems, setCardsItems] = useState(() => {
        try {
            const cardsinsessionstorage = sessionStorage.getItem("cardsSelected");
            return cardsinsessionstorage ? JSON.parse(cardsinsessionstorage) : [];
        } catch (error) {
            console.log(error)
        }
        
    });

    useEffect(() => {
        sessionStorage.setItem("cardsSelected", JSON.stringify(cardsItems));
    }, [cardsItems]);

    const addToLecture = (card) => {
        const inLecture = cardsItems.find(
            (cardInLecture) => cardInLecture.id === card.id
            );
        
        if (inLecture) {
            return (
                Swal.fire('Elige una carta diferente. Esta carta ya había sido agregada.'));  
        };
        
        if (cardsItems && cardsItems.length < 3) {
            setCardsItems([...cardsItems, {...card}])
            return
        }
        Swal.fire('ya agregaste 3 cartas');

       
    };

    return (
        <CardsContext.Provider value={{cardsItems, addToLecture}}>
            {children}
        </CardsContext.Provider>
    )
};


