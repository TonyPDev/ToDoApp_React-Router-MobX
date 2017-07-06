import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import store from './store';
import App from './components/App';
import './index.css';

const stores = { store };

ReactDOM.render(
	<Provider {...stores}>
		<App />
	</Provider>,
	document.getElementById('root')
);