// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'helpers/material';
import style from 'styles/Sidebar';
import Icon from 'components/Icon';
// $FlowIgnore
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
// $FlowIgnore
import Input from 'material-ui/Input/Input';

class Sidebar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({
      root: PropTypes.string,
      list: PropTypes.string,
    }).isRequired,
  }
  static defaultProps = {
    name: 'pedro@spotlightdata.co.uk'
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src="logoWhite.png" alt="Logo" className={classes.img} />
        <Input placeholder="Filter.." classes={{ input: classes.input, underline: classes.underline }} />
        <List className={classes.list}>
          <ListItem button>
            <Icon icon="home" />
            <ListItemText primary="Home" className={classes.list} />
          </ListItem>
          <ListItem button>
            <Icon icon="folder" />
            <ListItemText primary="Projects" className={classes.list} />
          </ListItem>
          <ListItem button>
            <Icon icon="settings" />
            <ListItemText primary="Settings" className={classes.list} />
          </ListItem>
        </List>
      </div>
    );
  }
}
const styledClass = withStyles(style)(Sidebar);
export default styledClass;
