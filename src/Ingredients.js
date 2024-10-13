import './App.css';
import * as React from 'react';


class Ingredients extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
      <div>
         <h2>Ingredients</h2>
        <ul>
          {this.props.ingredients.map(ingredient => {
            return (<li key={ingredient}>{ingredient}</li>);
          })}
        </ul>
      </div>
    );
  }
}

export default Ingredients;
