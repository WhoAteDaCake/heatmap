// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLike } from 'actions/index.js';

import type { Dispatch } from 'redux';

class Home extends Component {
  static propTypes = {
    user: PropTypes.shape({
      likes: PropTypes.string
    }).isRequired,
    addLike: PropTypes.func.isRequired,
  }
  updateCount = () => {
    this.props.addLike();
  }
  render() {
    const { likes } = this.props.user;
    return (
      <div className="home" style={{ padding: '10px' }}>
        <div>Home page | Likes: {likes}</div>
        <button onClick={this.updateCount}>Like</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  addLike: addLike(dispatch),
});
const mapStateToProps = state => ({ user: state.user });
const conenctedClass = connect(mapStateToProps, mapDispatchToProps)(Home);
export default conenctedClass;
