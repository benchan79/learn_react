import React from 'react';
import { AttentionGrabber } from './AttentionGrabber';
import { styles } from './styles.js'

const divStyle = {
  background: styles.background,
  height: '100%'
}

export class Home extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <AttentionGrabber />
        <footer>THANK YOU FOR VISITING MY HOMEPAGE!</footer>
      </div>
    );
  }
}