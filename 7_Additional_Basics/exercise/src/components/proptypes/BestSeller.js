import React from 'react';
import PropTypes from 'prop-types';

export class BestSeller extends React.Component {
  render() {
    return (
      <li style={{textAlign: 'left', marginTop: 20, marginRight: 0}}>
        Title: <span style={{position: 'absolute', left: 110}}>
          {this.props.title}
        </span><br />

        Author: <span style={{position: 'absolute', left: 110}}>
          {this.props.author}
        </span><br />

        Weeks: <span style={{position: 'absolute', left: 110}}>
          {this.props.weeksOnList}
        </span>
      </li>
    );
  }
}

BestSeller.propTypes = {
  title: PropTypes.string.isRequired,
  author:PropTypes.string.isRequired,
  weeksOnList: PropTypes.number.isRequired
};