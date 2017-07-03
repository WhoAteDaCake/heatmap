import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike } from 'actions/index.js';

class Home extends Component {
	updateCount = () => {
		this.props.addLike();
	}
  render() {
		const { likes } = this.props.user;
		return (
			<div className="home">
				<div>Home page | Likes: {likes}</div>
				<button onClick={this.updateCount}>Like</button>
			</div>
		);
  }
}
const mapDispatchToProps = dispatch => ({
	addLike: addLike(dispatch),
});
const conenctedClass = connect(state => ({ user: state.user }), mapDispatchToProps)(Home);
export default conenctedClass;