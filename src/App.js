import { useState } from 'react';
import './App.css';
import Component1 from './Component1';

function App() {
  const [gombfelirat, setGombfelirat] = useState([{id: 1, label: 'elso'}]);
  //const gombfelirat = ['elso', 'masodik', 'harmadik'];

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

export default App;
