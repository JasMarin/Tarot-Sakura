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
        console.log(cardsItems);
    }, [cardsItems]);

    const addToLecture = (card) => {
        const inLecture = cardsItems.find(
            (cardInLecture) => cardInLecture.id === card.id
        );

        if (inLecture) {
            setCardsItems(
                cardsItems.map((cardInLecture) => {
                    if(cardInLecture.id===card.id) {
                        return  {...inLecture};
                    } else return cardInLecture
                })
            );
        }else {
            setCardsItems([...cardsItems, {...card}])
        };
    };

    return (
        <CardsContext.Provider value={{cardsItems, addToLecture}}>
            {children}
        </CardsContext.Provider>
    )
};


