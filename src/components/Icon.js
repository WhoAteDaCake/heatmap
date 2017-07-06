// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import style from 'styles/Icon.js';
import classnames from 'classnames';

class Icon extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    classes: PropTypes.shape({
      icon: PropTypes.string,
    }).isRequired,
  }
  static defaultProps = {
    icon: 'error',
    className: '',
  }
  render() {
    const { classes, className, icon } = this.props;
    const mainClass = classnames(className, classes.icon, 'material-icons');
    return (
      <i className={mainClass}>{icon.replace(/\s/g, '_')}</i>
    );
  }
}
const styledClass = withStyles(style)(Icon);
export default styledClass;
