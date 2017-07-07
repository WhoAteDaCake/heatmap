// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLike } from 'actions/index.js';

import type { Dispatch } from 'redux';

class Home extends Component {
  //eslint-disable-next-line
  home() {
    return 'home';
  }
  render() {
    return (
      <div>
        <div>Home</div>
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
//   addLike: addLike(dispatch),
// });
// const mapStateToProps = state => ({ user: state.user });
// const conenctedClass = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
