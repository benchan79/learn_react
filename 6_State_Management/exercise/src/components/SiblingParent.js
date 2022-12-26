import React from 'react';
import { SiblingChild } from './SiblingChild';
import { SiblingSibling } from './SiblingSibling';

export class SiblingParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <SiblingChild onChange={this.changeName} />
        <SiblingSibling name={this.state.name} />
      </div>
    );
  }
};
