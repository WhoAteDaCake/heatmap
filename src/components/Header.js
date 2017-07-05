// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import Icon from 'components/Icon';

import HeaderStyles from 'styles/Header';

class Header extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    classes: PropTypes.shape({
      root: PropTypes.string,
      icon: PropTypes.string,
    }).isRequired,
  }
  static defaultProps = {
    name: ''
  }
  render() {
    console.log(this.props);
    return (
      <div id="header" className={this.props.classes.root}>
        <h1>
          <Icon icon="menu" />
          Hello {this.props.name}
        </h1>
      </div>
    );
  }
}
const styledClass = withStyles(HeaderStyles)(Header);
export default styledClass;
