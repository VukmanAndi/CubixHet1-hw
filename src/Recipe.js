import './App.css';
import * as React from 'react';
import Ingredients from './Ingredients';
import Difficulty from './Difficulty';


class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
      <div>
        <h1>{this.props.recipe.name}</h1>

        <Ingredients ingredients={this.props.recipe.ingredients}/>

        <h2>Instructions</h2>
        <p>{this.props.recipe.instructions}</p>

        <Difficulty difficulty={this.props.recipe.difficulty}/>
      </div>
    );
  }
}

export default Recipe;
