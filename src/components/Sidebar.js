// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import { filterByKey } from 'helpers/array';
import { connect } from 'react-redux';
import classnames from 'classnames';
import R from 'ramda';
import shortid from 'shortid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Icon from 'components/Icon';
import style from 'styles/Sidebar';
// $FlowIgnore
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
// $FlowIgnore
import Input from 'material-ui/Input/Input';

const buttonList = [
  {
    name: 'Home',
    icon: 'home',
    link: '/',
    secondary: false,
  },
  {
    name: 'Projects',
    icon: 'folder',
    link: '/projects',
    secondary: true,
  },
  {
    name: 'Settings',
    icon: 'settings',
    link: '/settings',
    secondary: false,
  },
];

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string,
      list: PropTypes.string,
      child: PropTypes.string,
      rotate: PropTypes.string,
    }).isRequired,
    open: PropTypes.bool.isRequired,
  }
  static defaultProps = {
  }
  state = {
    filterText: '',
    projectsOpen: false,
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

  toggleProjects = (e) => {
    e.preventDefault();
    this.setState(prev => ({
      filterText: prev.filterText,
      projectsOpen: !prev.projectsOpen
    }));
  }

  renderButton = (item: Object) => {
    const { list, child } = this.props.classes;
    const notChild = item.link.split('/').length === 2;
    const buttons = ['', 'projects', 'settings'];
    let extra = '';
    if (item.secondary) {
      extra = (
        <span role="button" tabIndex="0" onClick={this.toggleProjects}>
          <Icon icon="keyboard_arrow_down" className={this.state.projectsOpen ? this.props.classes.rotate : ''} />
        </span>
      );
    }


    return (
      <ListItem button component="a" href={item.link} key={shortid.generate()} className={notChild ? '' : child}>
        <Icon icon={item.icon} />
        <ListItemText primary={item.name} className={list} />
        { extra }
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
            {filter([buttonList[0]])}
            {filter([buttonList[1]])}
              {filter(
                (this.state.projectsOpen || this.state.filterText !== '') ? this.loadProjects() : ''
              )}
            {filter([buttonList[2]])}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => state.sidebar;

const styledClass = withStyles(style)(Sidebar);
const connectedClass = connect(mapStateToProps)(styledClass);
export default connectedClass;
