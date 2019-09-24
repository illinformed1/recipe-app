import React, { Component } from "react";
import { recipe } from "../tempDetails";

export default class RecipeDetails extends Component {
  state = {
    apiKey: "29feb290def3dde761e33da2b675fcfe",
    recipeDetails: recipe,
    url: `https://www.food2fork.com/api/get?key=29feb290def3dde761e33da2b675fcfe&rId=35382`
  };

  /* getRecipes() {
    fetch(this.state.url)
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ recipeDetails: data.recipes }));
  }

  componentDidMount() {
    this.getRecipes();
  }
*/
  render() {
    console.log(this.state.recipeDetails);
    const {
      image_url,
      publisher,
      publisher_url,
      ingredients,
      title
    } = this.state.recipeDetails;
    console.log("Recipe dets", this.state.recipeDetails);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto my-3 col-10">
              <button
                type="button"
                className="btn btn-warning mb-5 text-capitalize"
              >
                Back to Recipes
              </button>

              <img src={image_url} alt="" className="w-100 d-block " />
            </div>
            <div className="col-md-6 col-lg-6 col-10 my-3">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted mb-3">
                produced by {publisher}
              </h6>
              <button
                type="button"
                className="btn btn-primary mb-3 text-capitalize mr-3"
              >
                publisher webpage
              </button>
              <button
                type="button"
                className="btn btn-success mb-3 text-capitalize"
              >
                Recipe Url
              </button>
              <h3 className="text-capitalize">ingredients</h3>
              <ul className="list-group">
                {ingredients.map(ingredient => {
                  return <li className="list-group-item">{ingredient}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
