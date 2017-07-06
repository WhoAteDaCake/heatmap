// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
// Change style import
import style from 'styles/_template_';

// Change class name
class Template extends React.Component {
  // Change propTypes and defaults
  static propTypes = {
    name: PropTypes.string,
    classes: PropTypes.shape({
      root: PropTypes.string,
    }).isRequired,
  }
  static defaultProps = {
    name: ''
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1> Hello {this.props.name} </h1>
      </div>
    );
  }
}
const styledClass = withStyles(style)(Template);
export default styledClass;
