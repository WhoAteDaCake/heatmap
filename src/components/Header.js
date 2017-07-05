// @flow
import React from 'react';
import PropTypes from 'prop-types';
import headerStyle from '../styles/Header';

export default class Header extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }
  static defaultProps = {
    name: ''
  }
  render() {
    return (
      <div id="header" style={headerStyle}>
        <i className="material-icons">menu</i>
        <h1> Hello {this.props.name} </h1>
      </div>
    );
  }
}

