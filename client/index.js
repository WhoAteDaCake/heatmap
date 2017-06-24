import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/App';
import store from './store';

const MOUNT_NODE = document.getElementById('root');

function render() {
	ReactDom.render(
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	, MOUNT_NODE);
}

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./containers/App', () => render());
	module.hot.accept('./reducers', () => {
		console.log('Accepted');
		store.replaceReducer(require('./reducers').default);
		render();
	});
}

render();