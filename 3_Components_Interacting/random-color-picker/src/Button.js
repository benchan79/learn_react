import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.light ? "light-button" : "dark-button"}
        onClick={this.props.onClick}
      >
        Refresh
      </button>
    );
  }
}

// Checks if this.isLight in the parent App.js is true (dark background)
// then className='light-button' otherwise 'dark-button'
// the styles will be:

// .light-button {
//   background-color: rgba(255,255,255,0.5);
//   color: rgb(0,0,0);
// }

// .dark-button {
//   background-color: rgba(0,0,0,0.5);
//   color: rgb(255,255,255);
// }