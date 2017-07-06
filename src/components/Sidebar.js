// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import { connect } from 'react-redux';
import classnames from 'classnames';

import Icon from 'components/Icon';
import style from 'styles/Sidebar';
// $FlowIgnore
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// $FlowIgnore
import Input from 'material-ui/Input/Input';

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string,
      list: PropTypes.string,
      child: PropTypes.string,
    }).isRequired,
    open: PropTypes.bool.isRequired,
  }
  static defaultProps = {
  }
  state = {
    filterText: ''
  }

  search = (e) => {
    const value = e.target.value;
    this.setState(prev => ({ filterText: value }));
  }

  renderButton = (item, index) => {
    if (item.link.split('/').length === 2) {
      return (
        <ListItem button key={index}>
          <Icon icon={item.icon} />
          <ListItemText primary={item.name} className={this.props.classes.list} />
        </ListItem>
      );
    }
    return (
      <ListItem button key={index} className={this.props.classes.child}>
        <Icon icon={item.icon} />
        <ListItemText primary={item.name} className={this.props.classes.list} />
      </ListItem>
    );
  }
  ;


  render() {
    const buttonList = [
      {
        name: 'Home',
        icon: 'home',
        link: '/',
      },
      {
        name: 'Projects',
        icon: 'folder',
        link: '/projects',
      },
      {
        name: 'Project 1',
        icon: 'folder_open',
        link: '/projects/hi',
      },
      {
        name: 'Settings',
        icon: 'settings',
        link: '/settings',
      }
    ];
    const { classes } = this.props;
    const mainClass = classnames({
      [classes.root]: true,
      [`${classes.root}--active`]: this.props.open,
    });
    return (
      <div className={mainClass}>
        <img src="/static/imgs/logo-white.png" alt="Logo" className={classes.img} />
        <Input onChange={this.search} placeholder="Filter.." classes={{ input: classes.input, underline: classes.underline }} />
        <List className={classes.list}>
          {
            buttonList
            .filter(str => str.name.toUpperCase().includes(this.state.filterText.toUpperCase()))
            .map(this.renderButton)
          }
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => state.sidebar;

const styledClass = withStyles(style)(Sidebar);
const connectedClass = connect(mapStateToProps)(styledClass);
export default connectedClass;
