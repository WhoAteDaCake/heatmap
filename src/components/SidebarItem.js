// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import style from 'styles/SidebarItem';
import Icon from 'components/Icon';

// Change class name
class SidebarItem extends React.Component {
  // Change propTypes and defaults
  static propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.shape({
      root: PropTypes.string,
    }).isRequired,
  }
  static defaultProps = {
    name: 'Home',
    link: '/',
    icon: 'home'
  }
  render() {
    const { classes } = this.props;
    return (
      <a href={this.props.link} className={classes.root}>
        <Icon icon={this.props.icon} style={{ float: 'left' }} />
        <h5 style={{ margin: '0px' }}> {this.props.name} </h5>
      </a>
    );
  }
}
const styledClass = withStyles(style)(SidebarItem);
export default styledClass;
