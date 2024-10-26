import React, { useState } from 'react';

function GameOptions({ onShuffle }) {
  const [cardNumber, setCardNumber] = useState(12);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const prepareShuffle = () => {
    onShuffle(cardNumber);
  };

  return (
    <div>
      <input
        type="number"
        id="cardNumber"
        name="cardNumber"
        min="4"
        max="24"
        value={cardNumber}
        onChange={handleCardNumberChange}
      />
      <button onClick={prepareShuffle}>Shuffle</button>
    </div>
  );
}

export default GameOptions;