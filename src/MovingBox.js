import React, { Component } from 'react';
import './MovingBox.css';

class MovingBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      maxBox_X : 600 - 10,
      maxBox_Y : 400 - 10,
      saveBox_X: 0,
      saveBox_Y: 0
    };
    this.moveRight = this.moveRight.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", (e) => {
      switch(e.keyCode){
        case 37: 
          this.moveLeft();
          break;
        case 38: 
          this.moveUp();
          break; 
        case 39: 
          this.moveRight();
          break;
        case 40: 
          this.moveDown();
          break;
        default:
          break;
      }
    });
  }

  moveRight(){
    const boxInfo = this.refs.movable_box;
    if(this.state.maxBox_X > boxInfo.offsetLeft) {
      boxInfo.style.left = boxInfo.offsetLeft + 10+  "px";
      boxInfo.style.top  = boxInfo.style.top + "px";
      this.setState({saveBox_X:boxInfo.style.left, saveBox_Y:boxInfo.style.top});
    }
  }

  moveLeft(){
    const boxInfo = this.refs.movable_box;
    if(boxInfo.offsetLeft > 0) {
      boxInfo.style.left = boxInfo.offsetLeft - 10+  "px";
      boxInfo.style.top  = boxInfo.style.top + "px";
      this.setState({saveBox_X:boxInfo.style.left, saveBox_Y:boxInfo.style.top});
    }
  }

  moveUp(){
    const boxInfo = this.refs.movable_box;
    if(boxInfo.offsetTop > 0) {
      boxInfo.style.left = boxInfo.style.left +  "px";
      boxInfo.style.top  = boxInfo.offsetTop - 10+  "px";
      this.setState({saveBox_X:boxInfo.style.left, saveBox_Y:boxInfo.style.top});
    }
  }

  moveDown(){
    const boxInfo = this.refs.movable_box;
    if(this.state.maxBox_Y > boxInfo.offsetTop) {
      boxInfo.style.left = boxInfo.style.left + "px";
      boxInfo.style.top  = boxInfo.offsetTop + 10+  "px";
      this.setState({saveBox_X:boxInfo.style.left, saveBox_Y:boxInfo.style.top});
    }
  }

  reset(){
    const boxInfo = this.refs.movable_box;
    boxInfo.style.left = 0+  "px";
    boxInfo.style.top  = 0 + "px";
    this.setState({saveBox_X:0, saveBox_Y:0});
  }

  componentWillUnmount() {
    document.removeEventListener('keydown',null);
  }

  render() {
    return (
      <div className="App">
        <header className="App_header">
          <h1 className="App_title">The Moving Box Problem</h1>
        </header>
        <div id="Content_box">
          <div id='Movable_box' ref="movable_box">
            <div id="Display_cordinates">({this.state.saveBox_X !== "" ? this.state.saveBox_X :'0px'},
                {this.state.saveBox_Y !== "" ? this.state.saveBox_Y :'0px'}) Current coordinates.
            </div>
          </div>
          <div id="Info">Use the keyboard arrow keys to move the box or you can use the buttons as well.
            <button onClick={(e) => this.moveRight(e)} id="Arrow_right">Arrow Right</button>
            <button onClick={(e) => this.moveLeft(e)} id="Arrow_left">Arrow Left</button>
            <button onClick={(e) => this.moveUp(e)} id="Arrow_up">Arrow Up</button>
            <button onClick={(e) => this.moveDown(e)} id="Arrow_down">Arrow Down</button>
            <button onClick={(e) => this.reset(e)} id="Reset">Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovingBox;
