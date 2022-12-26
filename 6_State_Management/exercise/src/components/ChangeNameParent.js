import React from 'react';
import { ChangeNameChild } from './ChangeNameChild';

export class ChangeNameParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this)
  }
  
  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return <ChangeNameChild name={this.state.name} onChange={this.changeName}/>
  }
}