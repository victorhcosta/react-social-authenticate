import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	Switch,
	BrowserRouter,
	Route
} from 'react-router-dom';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

import { GlobalStyle } from './styles';

import { LoginPage } from './pages/login';

import {
	LinkedinLoginPopUp
} from '../src/linkedin';

const App = () => {

	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={LoginPage} />
					<Route path='/login/social' exact component={LinkedinLoginPopUp} />
				</Switch>
			</BrowserRouter>
			<GlobalStyle />
		</>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
