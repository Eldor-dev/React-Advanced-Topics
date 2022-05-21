import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

export default class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {(value) => (
          <div>
            Movie List {value.name} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
