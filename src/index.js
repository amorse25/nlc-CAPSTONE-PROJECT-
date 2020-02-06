/***** Root Component *****/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';

const routing = (
	<Router>
		<div>
			<div id='titleBar'>
				<div id='ISCITitle'>Infrared Spectra Comparison Interface</div>
				<Navigation />
				
			</div>
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();