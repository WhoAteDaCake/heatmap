// @flow
import React from 'react';
import PropTypes from 'prop-types';
import style from '../styles/Header.js';

export default class Header extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    name: ''
  }
  render() {
    return (
      <div id="header" style={style}>
        <h1> Hello {this.props.name} </h1>
      </div>
    );
  }
}
