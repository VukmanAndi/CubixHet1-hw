import React, { useEffect, useState } from 'react';
import cardsData from './CardsData';
import Card from './Card';

function GameBoard({ cardNumber }) {
  const [shuffledCards, setShuffledCards] = useState([]);

  //firstCard, secondCard
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  //isClickAllowed global card state
  const [isClickAllowed, setIsClickAllowed] = useState(true);

  useEffect(() => {
    const halfCardNumber = Math.floor(cardNumber / 2);
    
    //shuffle the cards
    const shuffledData = cardsData.sort(() => Math.random() - 0.5);
    const selectedCards = shuffledData.slice(0, halfCardNumber);
  
    //double the selected cards and add customId to each card
    const doubledCards = selectedCards.flatMap((card) => [
      { ...card, customId: card.id + 'a' },
      { ...card, customId: card.id + 'b' },
    ]);

    //shuffle the doubled cards
    setShuffledCards(doubledCards.sort(() => Math.random() - 0.5));

    return () => {
      console.log('cleanup');
    };
  }, [cardNumber]);

  useEffect(() => {
    if (firstCard !== null && secondCard !== null) {
      setIsClickAllowed(false); //disable clicking on other cards
      console.log('two cards');
      if (firstCard.id === secondCard.id) {
        //find cards in shuffledCards and set isMatched to true, find them by customId
        console.log('match');
        setIsClickAllowed(true); //enable clicking on other cards
        shuffledCards.forEach((c) => {
          if (
            c.customId === firstCard.customId ||
            c.customId === secondCard.customId
          ) {
            c.isMatched = true;
          }
        });

        //reset firstCard and secondCard
        setFirstCard(null);
        setSecondCard(null);
      } else {
        console.log('no match');
        setTimeout(() => {
          setIsClickAllowed(true); //enable clicking on other cards

          //flip back the cards
          shuffledCards.forEach((c) => {
            if (
              c.customId === firstCard.customId ||
              c.customId === secondCard.customId
            ) {
              c.isFlipped = false;
            }
          });

          setFirstCard(null);
          setSecondCard(null);
        }, 1000);
      }
    }
  }, [firstCard, secondCard, setFirstCard, setSecondCard, shuffledCards]);

  const handleClick = (card) => {
    console.log('clicked: ', card);
    if (firstCard === null) {
      setFirstCard(card);
    } else if (secondCard === null) {
      setSecondCard(card);
    }

    //flip the card
    card.isFlipped = true;
  };

  return (
    <div>
      {shuffledCards.map((card) => (
        <Card
          key={card.customId}
          card={card}
          isClickAllowed={isClickAllowed}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default GameBoard;
