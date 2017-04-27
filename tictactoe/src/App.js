import React, { Component } from 'react';
import logo from './logo.svg';
import husky from './husky.png';
import cougar from './cougar.png';
import './App.css';


window.oncontextmenu = function() {
  return false;
}

class App extends Component {
  render() {
    return (
      <div>
        <TitleComponent name="Husky-Cougar-Toe"/>
        <Board />
        <Tile />
      </div>
    );
  }
}

class TitleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title : props.name
    }
  }

  render() {
    return (
      <h1>{this.state.title}</h1>
    );
  }
}

class Board extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board"></div>
    );
  }
}

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shape: "tile",
      animal: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e.button == 0) {
      this.setState({animal: "husky"});
    } else if(e.button == 2) {
      this.setState({animal: "coug"});
    } else if(e.button == 1) {
      this.setState({animal: ""});
    }
    
  }

  render() {
    return (
      <div className={this.state.shape + " " + this.state.animal} 
      onMouseDown={this.handleClick}
      style={{backgroundImage: "url(\"" + (this.state.animal == "husky" ? husky : cougar) + "\")"}}></div>
    );
  }
}

export default App;
