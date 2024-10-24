import { useState } from 'react';
import './App.css';
import Component1 from './Component1';
import CARD_BACK from './assets/cards/card-back1.png';
import CARD_CLUBS_1 from './assets/cards/card-clubs-1.png';
import CARD_DIAMONDS_1 from './assets/cards/card-diamonds-1.png';
import CARD_HEARTS_1 from './assets/cards/card-hearts-1.png';
import CARD_SPADES_1 from './assets/cards/card-spades-1.png';
import Card from './Card';


/*
*** N darab kártyánk *** van lefordítva, ha rákattintunk két kártyára, akkor azok megfordulnak
ha azonosok, akkor megfordulva is maradnak.
Ha nem azonosak, akkor *** 1 másodpercen keresztül látjuk a kártyákat ***, majd visszafordulnak.
Ez idő alatt nem lehet a többi kártyára kattintani.
A kártyákat véletlenszerűen generáljuk, a játék végéig nem változnak meg.

- 8 kártya
- 


*/
//sorsoló függvény

function App() {
  const [cardFace1, setCardFace1] = useState({id: 1, label: CARD_BACK});
  const [cardFace2, setCardFace2] = useState({id: 2, label: CARD_BACK});
  

  return (
    <div>
      <Card 
          key={cardFace1.id} 
          label={cardFace1.label}
          onChange={() => {
            setCardFace1(
              {id: 1, label: CARD_CLUBS_1},
            );
          }}
           />

      <Card 
          key={cardFace2.id} 
          label={cardFace2.label}
          onChange={() => {
            setCardFace2(
              {id: 2, label: CARD_DIAMONDS_1},
            );
          }}
           />
    </div>
  );
}

/*

function App() {
  const [gombfelirat, setGombfelirat] = useState([{id: 1, label: 'elso'}]);

  return (
    <div>
      {gombfelirat.map(item => {
        return (<Component1 
          key={item.id} 
          label={item.label}
          onChange={() => {
            setGombfelirat([
              {id: 2, label: 'masodik'}
            ]);
          }}
           />);
      })}
    </div>
  );
}
  */

export default App;
