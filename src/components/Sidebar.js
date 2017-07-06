// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import style from 'styles/Sidebar';

class Sidebar extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    classes: PropTypes.shape({
      root: PropTypes.string,
    }).isRequired,
  }
  static defaultProps = {
    name: 'pedro@spotlightdata.co.uk'
  }
  render() {
    const { classes } = this.props;
    return (
      <div id="header" className={classes.root}>
        <h1> Sidebar </h1>
        <h3> {this.props.name} </h3>
      </div>
    );
  }
}
const styledClass = withStyles(style)(Sidebar);
export default styledClass;
