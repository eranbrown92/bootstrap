import React from "react";
import ReactDOM from "react-dom";
import { Button } from "bootstrap";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      dislike: 0
    };
  }

  handleAdd = () => {
    this.setState({
      like: this.state.like + 1
    });
  };

  handleSubtract = () => {
    this.setState({
      dislike: this.state.dislike + 1
    });
  };

  handleReset = () => {
    this.setState({
      like: 0,
      dislike: 0
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to MyApp!</h1>
        <img
          className="img"
          alt="img"
          src="https://via.placeholder.com/250x250"
        />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          <span>&#128077;</span>
          {this.state.like}
        </button>
        <button className="btn btn-danger" onClick={this.handleSubtract}>
          <span>&#x1F44E;</span>
          {this.state.dislike}
        </button>
        <button className="btn btn-success" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
