import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    console.log(this.props.recipe);
    const {
      recipe_id,
      image_url,
      title,
      source_url,
      publisher
    } = this.props.recipe;
    return (
      <React.Fragment>
        <div className="col-10 col-md-6 col-lg-4 mx-auto my-3">
          <div className="card">
            <img
              src={image_url}
              alt="recipe image"
              style={{ height: "20rem" }}
              className="img-card-top"
            />
            <div className="card-body text-capitalize">
              <h6>{title}</h6>
              <h6 className="text-warning text-slanted">
                provided by {publisher}
              </h6>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary text-capitalize">
                details
              </button>
              <a
                href={source_url}
                className="btn btn-success mx-2 text-capitalize"
                target="_blank"
              >
                recipe url
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
