import React from 'react';
import { colorStyles } from './facebookStyles';

let divStyle = {
  backgroundColor: colorStyles.darkBlue,
  color: colorStyles.white
};

export class Wow extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        Wow, I stole these colors from Facebook!
      </div>
    );
  }
}