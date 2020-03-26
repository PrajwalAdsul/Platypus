import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import Error from '../elements/Error';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div>
			<nav className='navbar navbar-expand-lg navbar-light header'>
			<a className="navbar-brand" href="#">
            <h1><b>PlatyPus</b></h1>
          	</a>
          	<h2>
          	<div className="nav navbar-nav ml-auto">
          	<Link to="/PlatyTerminal" className='nav-item nav-link'>Terminal</Link>
            <Link to="/PlatyShare" className='nav-item nav-link'>PlatyShare</Link>
            <Link to="/PlatyConsole" className='nav-item nav-link'>PlatyConsole</Link>	
            <Link to="/PlatyDetect" className='nav-item nav-link'>PlatyDetect</Link>	
            <Link to="/PlatyReal" className='nav-item nav-link'>PlatyReal</Link>	
            	
            </div>
			</h2>
			</nav>			
			</div>
		)
	}
}
