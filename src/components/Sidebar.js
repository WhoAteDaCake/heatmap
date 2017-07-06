// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import style from 'styles/Sidebar';
import SidebarItem from 'components/SidebarItem';

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
      <div className={classes.root}>
        <h1> Sidebar </h1>
        <h3> {this.props.name} </h3>
        <SidebarItem name="Home" icon="home" link="/" />
        <SidebarItem name="Projects" icon="folder" link="/projects" />
        <SidebarItem name="Settings" icon="settings" link="/settings" />

      </div>
    );
  }
}
const styledClass = withStyles(style)(Sidebar);
export default styledClass;
