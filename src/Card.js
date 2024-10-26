import React, { useEffect, useState } from 'react';
import cardBacks from './CardBacksData';

function Card({ card, handleClick }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardBack = cardBacks[0];

  return (
    <img
      style={{ padding: '5px', cursor: 'pointer', display: 'inline-block' }}
      src={isFlipped ? card.publicImageUrl : cardBack.publicImageUrl}
      alt={card.name}
      onClick={ function() {
        handleClick();
        setIsFlipped((e) => !e);
      }}
    />
  );
}

export default Card;
