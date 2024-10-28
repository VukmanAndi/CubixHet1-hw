import React, { useEffect, useState } from 'react';
import cardBacks from './CardBacksData';

function Card({ card, handleClick, isClickAllowed }) {
  const isClickable = isClickAllowed && !card.isMatched && !card.isFlipped;
  const cardBack = cardBacks[0];

  return (
    <img
      className='card'
      style={{
        cursor: isClickable ? 'pointer' : 'not-allowed',
      }}
      src={card.isFlipped ? card.publicImageUrl : cardBack.publicImageUrl}
      alt={card.name}
      onClick={function () {
        if (isClickable) {
          handleClick(card);
        } else {
          console.log('Card is not clickable');
        }
      }}
    />
  );
}

export default Card;
