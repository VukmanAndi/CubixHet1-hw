import {useState, useEffect} from 'react';
import './App.css';


//pure functional component
function Component1({label, onChange}) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const tick = setInterval(() => setCounter(e => e + 1), 1000);
    return () => clearInterval(tick);
  }, [setCounter]);

  return (
    <div>
      <b>{counter}</b>{" "}
      <button onClick={()=>{
        setCounter(e => e - 1);  
      }} >{label}</button>
      <button onClick={onChange}>meh</button>
      <br/> <br/>
    </div>
  );
}


// class component - old version
/*class Component1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
    }


  render() {
    return (
      <div>
        <b>{this.state.counter}</b>{" "}
        <button onClick={()=>{
          this.setState({counter: this.state.counter + 1});  
        }} >{this.props.label}</button>
        <br/> <br/>
      </div>
    );
  }
}*/

export default Component1;
