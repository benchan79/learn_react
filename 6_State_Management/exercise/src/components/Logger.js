import React from 'react';

export class Example extends React.Component {
  logger(param) {
    console.log(param);
  }
 
  render() {
    return <button onClick={this.logger}>Click to see the event object being logged in console.</button>;
  }
};
