// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import style from 'styles/Icon.js';

// Change class name
class Icon extends React.Component {
  // Change propTypes and defaults
  static propTypes = {
    icon: PropTypes.string,
    classes: PropTypes.shape({
      icon: PropTypes.string,
    }).isRequired,
  }
  static defaultProps = {
    icon: 'error'
  }
  render() {
    const { classes } = this.props;
    return (
      <i className={`material-icons ${this.props.classes.icon}`}>
        {this.props.icon}
      </i>
    );
  }
}
const styledClass = withStyles(style)(Icon);
export default styledClass;
