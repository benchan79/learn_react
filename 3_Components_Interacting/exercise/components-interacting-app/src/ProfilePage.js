import React from 'react';
// import ReactDOM from 'react-dom';

//Method 2
// import NavBar from './NavBar';

import {NavBar} from './NavBar';

export class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img alt='' src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}


