import './App.css';
import Recipe from './Recipe';

function App() {
  const recipes = [
    {
      id: 1,
      name: 'Tejbegríz',
      ingredients: ['tej', 'búzadara', 'cukor'],
      instructions: 'Forrald fel a tejet a cukorral, majd add hozzá a búzadarát és főzd 10 percig.',
      difficulty: 1
    },
    {
      id: 2,
      name: 'Csirkepörkölt',
      ingredients: ['csirke', 'vöröshagyma', 'paprika', 'só'],
      instructions: 'Pirítsd meg a hagymát, majd add hozzá a csirkét, a paprikát és a sót.',
      difficulty: 3
    },
    {
      id: 3,
      name: 'Somlói galuska',
      ingredients: [  'tojás', 'cukor', 'liszt', 'tej', 'kakaópor', 'dió', 'mazsola', 'vaníliás pudingpor', 'csokiöntet','habtejszín'],
      instructions: 'Készíts 3 piskótát a tojásból, a cukorból és a lisztből. Az egyik kakaós a másik diós a harmadik sima legyen. Főzd meg a pudingot a tejjel. Rétegezd a piskótákat, a pudingot és a mazsolát. Öntsd le csokiöntettel. Tálald tejszínhabbal.',
      difficulty: 5
    }
  ];

  return (
    <div>
      {recipes.map(item => {
        return (<Recipe key={item.id} recipe={item}/>);
        })}
    </div>
  );
}

export default App;
