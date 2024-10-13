import './App.css';
import * as React from 'react';


class Difficulty extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
      <div>
      <h2>Difficulty</h2>
        <p>{'*'.repeat(this.props.difficulty)}</p>
        <br/> <br/>
      </div>
    );
  }
}

export default Difficulty;
