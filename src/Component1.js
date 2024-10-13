import logo from './logo.svg';
import './App.css';
import * as React from 'react';


class Component1 extends React.Component {
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
}

export default Component1;
