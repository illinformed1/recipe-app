import React, { Component } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { recipe } from "./tempList";

import "./App.css";

class App extends Component {
  state = {
    recipes: recipe,
    url:
      "https://www.food2fork.com/api/search?key=29feb290def3dde761e33da2b675fcfe"
  };

  getRecipes() {
    fetch(this.state.url)
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ recipes: data.recipes }));
  }

  componentDidMount() {
    this.getRecipes();
  }

  render() {
    console.log("from the local", this.state.recipes);
    return (
      <div className="App">
        <RecipeList recipes={this.state.recipes} />
        <RecipeDetails />
      </div>
    );
  }
}

export default App;
