import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <TitleComponent name="Husky-Cougar-Toe"/>
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
  
  onClickListener() {

  }

  render() {
    return (
      <h1>{this.state.title}</h1>
    );
  }
}

export default App;
