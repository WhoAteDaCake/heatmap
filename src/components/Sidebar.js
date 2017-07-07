// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import { filterByKey } from 'helpers/array';
import { connect } from 'react-redux';
import classnames from 'classnames';
import R from 'ramda';
import shortid from 'shortid';

import Icon from 'components/Icon';
import style from 'styles/Sidebar';
// $FlowIgnore
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// $FlowIgnore
import Input from 'material-ui/Input/Input';

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
    name: 'Settings',
    icon: 'settings',
    link: '/settings',
  },
];

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
    filterText: '',
    projectsOpen: 'false'
  }

  search = (e) => {
    const value = e.target.value;
    this.setState(prev => ({ filterText: value, projectsOpen: prev.projectsOpen }));
  }

  loadProjects = () => ([
    {
      name: 'Project 1',
      icon: 'folder_open',
      link: '/projects/hi',
    },
  ])

  renderButton = (item: Object) => {
    const { list, child } = this.props.classes;
    const notChild = item.link.split('/').length === 2;
    let orderValue = 0;
    if (item.link.split('/')[1] === '') {
      orderValue = 0;
    } else if (item.link.split('/')[1] === 'projects') {
      orderValue = 1;
    } else if (item.link.split('/')[1] === 'settings') {
      orderValue = 2;
    }


    return (
      <ListItem button key={shortid.generate()} className={notChild ? '' : child} style={{ order: orderValue }}>
        <Icon icon={item.icon} />
        <ListItemText primary={item.name} className={list} />
      </ListItem>
    );
  }

  render() {
    const { classes, open } = this.props;
    const { filterText } = this.state;
    const mainClass = classnames({
      [classes.root]: true,
      [`${classes.root}--active`]: open,
    });
    const filter = filterByKey(filterText, 'name', this.renderButton);
    return (
      <div className={mainClass}>
        <img src="/static/imgs/logo-white.png" alt="Logo" className={classes.img} />
        <Input onChange={this.search} placeholder="Filter.." classes={{ input: classes.input, underline: classes.underline }} />
        <List className={classes.list}>
          {filter(
            (!this.state.projectsOpen || this.state.filterText !== '') ? buttonList.concat(this.loadProjects()) : buttonList
          )}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => state.sidebar;

const styledClass = withStyles(style)(Sidebar);
const connectedClass = connect(mapStateToProps)(styledClass);
export default connectedClass;
