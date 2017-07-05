// @flow
import React from 'react';
import PropTypes from 'prop-types';
// Change style import
import style from '../styles/_template_';

// Change class name
export default class Template extends React.Component {
  // Change propTypes and defaults
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
