// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleSidebar } from 'actions/sidebar';

// $FlowIgnore flow bug
import AppBar from 'material-ui/AppBar';
// $FlowIgnore flow bug
import Toolbar from 'material-ui/Toolbar';
// $FlowIgnore flow bug
import Typography from 'material-ui/Typography';
// $FlowIgnore flow bug
import Button from 'material-ui/Button';

import Icon from 'components/Icon';
import HeaderStyles from 'styles/Header';

class Header extends React.Component {
  static propTypes = {
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
  toggle = (e) => {
    e.preventDefault();
    const { open } = this.props.sidebar;
    this.props.toggleSidebar(open ? 'close' : 'open');
  }
  render() {
    const { classes } = this.props;
    const { open } = this.props.sidebar;
    console.log(this.props);
    return (
      <AppBar position="static" className={classes.root} >
        <Toolbar>
          <a onClick={this.toggle} role="button" tabIndex={0} className={classes.icon}>
            <Icon icon={open ? 'arrow back' : 'menu'} />
          </a>
          <Typography type="title" color="inherit" className={classes.text}>
            Page
          </Typography>
          <Button color="contrast" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
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
