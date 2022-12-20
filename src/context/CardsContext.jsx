import React, {createContext, useState, useEffect} from 'react'

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
        if (cardsItems && cardsItems.length < 3) {
            setCardsItems([...cardsItems, {...card}])
            return
        }
        alert('ya agregaste 3 cartas')
    };

    return (
        <CardsContext.Provider value={{cardsItems, addToLecture}}>
            {children}
        </CardsContext.Provider>
    )
};


