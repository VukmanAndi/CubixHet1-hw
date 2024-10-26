import React, { useEffect, useState } from 'react';
import cardsData from './CardsData';
import Card from './Card';

function Table({ cardNumber }) {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [clickCounter, setClickCounter] = useState(0);

  useEffect(() => {
    console.log(clickCounter);
    if (clickCounter === 2) {
      console.log('two clicks');
    }
  }, [clickCounter]);

  useEffect(() => {
    const halfCardNumber = Math.floor(cardNumber / 2);
    //shuffle cardsData first randomly
    const shuffledData = cardsData.sort(() => Math.random() - 0.5);
    console.log(shuffledData);
    //select the first halfCardNumber cards
    const selectedCards = shuffledData.slice(0, halfCardNumber);
    console.log(selectedCards);
    //double the selected cards and add customId to each card
    const doubledCards = selectedCards.flatMap((card) => [
      { ...card, customId: card.id + 'a' },
      { ...card, customId: card.id + 'b' },
    ]);
    //const doubledCards = selectedCards.flatMap((card) => [card, { ...card }]);
    console.log(doubledCards);
    setShuffledCards(doubledCards.sort(() => Math.random() - 0.5));

    return () => {
      console.log('cleanup');
    };
  }, [cardNumber]);

  const handleClick = () => {
    setClickCounter((e) => e + 1);
  };

  return (
    <div>
      {shuffledCards.map((card) => (
        <Card
          key={card.customId}
          card={card}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default Table;
