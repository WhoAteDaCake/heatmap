// @flow
import React from 'react';
import PropTypes from 'prop-types';
import routeToLabel from 'helpers/routeToLabel';
import { withRouter } from 'react-router-dom';

// $FlowIgnore flow bug
import Typography from 'material-ui/Typography';


class HeaderTitle extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
      listen: PropTypes.func,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      pathname: props.location.pathname,
    };
  }

  state = {}

  componentDidMount() {
    this.unlisten = this.props.history.listen(this.updateHeaderTitle);
  }

  componentWillUnmount() {
    this.unlisten();
  }

  // Need this placeHolder else an error is thrown
  unlisten = () => {}

  updateHeaderTitle = (location) => {
    if (location.pathname !== this.state.pathname) {
      this.setState({ pathname: location.pathname });
    }
  }
  render() {
    const { className } = this.props;
    const { pathname } = this.state;
    return (
      <Typography type="title" color="inherit" className={className}>
        {routeToLabel(pathname)}
      </Typography>
    );
  }
}

const routedClass = withRouter(HeaderTitle);
export default routedClass;
