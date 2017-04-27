import React, { Component } from 'react';
import logo from './logo.svg';
import husky from './husky.png';  // Image resources need to be imported at the beginning.
import cougar from './cougar.png'; // Now cougar/husky are variables representing urls.
import './App.css';

// Need to disable right click menu
window.oncontextmenu = function() {
  return false;
}

// Main app component. We can think of it as "main".
class App extends Component {
  render() {
    return (
      <div>
        <TitleComponent name="Husky-Cougar-Toe"/>
        <Board />
      </div>
    );
  }
}

// Very simple component, just displaying an h1
// with the given attribute.
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

// Slightly more interesting. A board element is a div,
// with styles are are familiar with but now we set them in
// the render stage. Add a bunch of Tile tags woth a loop.
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props,
      gridState : {
        topLeft : 0, top : 1, topRight : 2,
        midLeft : 3, mid : 4, midRight : 5,
        botLeft : 6, bot : 7, botRight : 8
      },
      gridLook : {
        getLeft : function(myPos) {if(myPos % 3 == 0) { return -1 } else { return myPos - 1 } },
        getRight : function(myPos) {if( (myPos + 1) % 3 == 0) { return -1 } else { return myPos + 1 } },
        getTop : function(myPos) {if(myPos < 3) { return -1 } else { return myPos - 3 } },
        getBottom : function(myPos) {if(myPos > 5) { return -1 } else { return myPos + 3 } }
      }
    }
  }

  componentWillMount() {
    var tiles = [];
    for(var i = 0; i < 9; i++) {
      tiles.push(<Tile key={i}/>);
    }
    this.setState({tiles : tiles });
  }

  winner() {
    if
  }

  render() {
    if(this.winner()) {
      
    }
    return (
      <div className="board"
      style={ {
        width: 300 + 50,
        height: 300 + 50
      } }>
        {this.state.tiles}
      </div>
    );
  }
}


// Down here is the most complex example yet.
// A single tile knows its classes as a form of state.
// We have function called handleClick (that takes in a parameter,
// and we bind it in the constructor). Now when we render a tile,
// each one knows to change their state on click and that will trigger
// a re-render.
class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shape: "tile",
      animal: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // Simmilar to onClick on the OOP example, but now we update
  // state and not the style directly.
  handleClick(e) {
    if(e.button == 0) {
      this.setState({animal: "husky"});
    } else if(e.button == 2) {
      this.setState({animal: "coug"});
    } else if(e.button == 1) {
      this.setState({animal: ""});
    }
    
  }

  // Render uses reacts method for updating style (passing in an JSON object)
  // As well we can atttach an onMouseDown handler.
  render() {
    return (
      <div className={this.state.shape + " " + this.state.animal} 
      onMouseDown={this.handleClick}
      style={{backgroundImage: "url(\"" + (this.state.animal == "husky" ? husky : cougar) + "\")"}}></div>
    );
  }
}

export default App;
