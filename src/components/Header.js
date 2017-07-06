// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSidebar } from 'actions/sidebar';

import Icon from 'components/Icon';
import HeaderStyles from 'styles/Header';

class Header extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    classes: PropTypes.shape({
      root: PropTypes.string,
      icon: PropTypes.string,
    }).isRequired,
    sidebar: PropTypes.shape({
      open: PropTypes.bool,
    }).isRequired,
    toggleSidebar: PropTypes.func.isRequired,
  }
  static defaultProps = {
    name: ''
  }
  toggle = () => {
    const { open } = this.props.sidebar;
    this.props.toggleSidebar(open ? 'close' : 'open');
  }
  render() {
    return (
      <div id="header" className={this.props.classes.root}>
        <button onClick={this.toggle}>change</button>
        <h1>
          <Icon icon="menu" />
          Hello {this.props.name}
        </h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  toggleSidebar: toggleSidebar(dispatch),
});

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

const styledClass = withStyles(HeaderStyles)(Header);
const routedClass = withRouter(styledClass);
const connectedClass = connect(mapStateToProps, mapDispatchToProps)(routedClass);
export default connectedClass;
