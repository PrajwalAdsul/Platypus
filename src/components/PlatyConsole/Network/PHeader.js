import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
// import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';

export default class PHeader extends Component {
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
            <h2><b>Network</b></h2>
          	</a>
			<div className="nav navbar-nav ml-auto">
			<h2>
          	<Link to="/PlatyConsole/Network/AddressFamilies" className='nav-item nav-link'>AddressFamilies</Link>
            <Link to="/PlatyConsole/Network/AddressForAllInterfaces" className='nav-item nav-link'>AddressForAllInterfaces</Link>
            <Link to="/PlatyConsole/Network/AllNICs" className='nav-item nav-link'>All NICs</Link>	 
            <Link to="/PlatyConsole/Network/Gateways" className='nav-item nav-link'>Gateways</Link>  			
          	</h2>
            </div>
			</nav>			
			</div>
		)
	}
}
