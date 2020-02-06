/***** Component responsible for handling all routing requests done through the navigation bar.
 *     This component is rendered within index.js and is wrapped over all other components.
 *     *****/

import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import App from './HitlistPage/App';
import UploadPage from './UploadPage/UploadPage';
import HelpPage from './HelpPage/HelpPage';
import AboutPage from './AboutPage/AboutPage';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';

class Navigation extends Component {
	render() {
		return (
			<div>
				<div>
					<Navbar id='navBar'>
						<Navbar.Brand as={Link} to="/"> <img
							src="/spectra1.png"
							width="50"
							height="50"
							className="d-inline-block align-top"
							alt="Spectra Logo"
						/>
						</Navbar.Brand>

						<Nav>
							<NavItem eventkey={1} href="/">
								<Nav.Link as={Link} className='nav-link' to="/"
										  activeclassname="active">Upload</Nav.Link>
							</NavItem>
							<NavItem eventkey={2} href="/hitlist">
								<Nav.Link as={Link} className='nav-link' to="/hitlist"
										  activeclassname="active">Hitlist</Nav.Link>
							</NavItem>
							<NavItem eventkey={3} href="/help">
								<Nav.Link as={Link} className='nav-link' to="/help"
										  activeclassname="active">Help</Nav.Link>
							</NavItem>
							<NavItem eventkey={4} href="/about">
								<Nav.Link as={Link} className='nav-link' to="/about"
										  activeclassname="active">About</Nav.Link>
							</NavItem>
						</Nav>

					</Navbar>

				</div>
				<div>
					<Switch>
						<Route exact path='/' component={UploadPage}/>
						<Route exact path='/hitlist' component={App}/>
						<Route exact path='/help' component={HelpPage}/>
						<Route exact path='/about' component={AboutPage}/>
						<Route render={function () {
							return <p>Not found</p>;
						}}/>
					</Switch>
				</div>
			</div>
		);
	}
}

export default Navigation;