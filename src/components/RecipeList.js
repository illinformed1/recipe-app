import React, { Component } from "react";
import Recipe from "./Recipe";
import RecipeSearch from "./RecipeSearch";

export default class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    return (
      <React.Fragment>
        <RecipeSearch />
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 col-md-6 mx-auto text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* End of title*/}
          <div className="row">
            {recipes.map(recipe => {
              return <Recipe key={recipe.recipe_id} recipe={recipe} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
