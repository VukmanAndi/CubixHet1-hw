import React, { useState } from 'react';
import './App.css';
import GameOptions from './GameOptions';
import GameBoard from './GameBoard';

/*
*** N darab kártyánk *** van lefordítva, ha rákattintunk két kártyára, akkor azok megfordulnak
ha azonosok, akkor megfordulva is maradnak.
Ha nem azonosak, akkor *** 1 másodpercen keresztül látjuk a kártyákat ***, majd visszafordulnak.
Ez idő alatt nem lehet a többi kártyára kattintani.
A kártyákat véletlenszerűen generáljuk, a játék végéig nem változnak meg.

- 8 kártya

*/
//sorsoló függvény

function App() {
  const [cardNumber, setCardNumber] = useState(12);
  const [shuffleTrigger, setShuffleTrigger] = useState(false);

  const handleShuffle = (number) => {
    setCardNumber(number);
    setShuffleTrigger((prev) => !prev);
  };

  return (
    <div>
      <h1>Memory Game</h1>
      <p>
        For this game session the selected card number is: <b>{cardNumber}</b>
      </p>
      <GameBoard key={`${cardNumber}-${shuffleTrigger}`} cardNumber={cardNumber} />
      <GameOptions onShuffle={handleShuffle} />
    </div>
  );
}

export default App;
