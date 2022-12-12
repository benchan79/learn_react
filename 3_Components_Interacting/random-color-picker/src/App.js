import React from 'react';
import './App.css';
import { Button } from './Button';


export class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [120, 120, 160] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  // returns a string rgb(x, y, z) that is displayed
  // and for .applyColor to change background color
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  // checks if the sum of numbers in this.state.color is less than (127*3 = 381)
  // and returns true or false
  // if true means the color is dark and the h1 className='white'
  // which the css styles as h1 font color as white
  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  // changes the background color using the string from .formatColor
  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  // creates and array of 3 numbers
  // each ranging from 0 to 256
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  // event handler that uses this
  // that means you need to bind the new new method
  handleClick() {
    this.setState( {color: this.chooseColor()} );
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(this.state.color)}.
        </h1>
        <Button 
          light={this.isLight()} 
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

// this.setState accepts an updated object and sets it as the current this.state


