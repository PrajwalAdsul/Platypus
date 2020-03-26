import React, { Component } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
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
            <h2><b>PlatyPus</b></h2>
          	</a>
			<div className="nav navbar-nav ml-auto">
			<h2>
          	<Link to="/PlatyConsole/Network" className='nav-item nav-link'>Network</Link>
            <Link to="/PlatyConsole/CPU" className='nav-item nav-link'>CPU</Link>
            <Link to="/PlatyConsole/Process" className='nav-item nav-link'>Process</Link>	 
            <Link to="/PlatyConsole/Disk/DiskIOCounters" className='nav-item nav-link'>DiskIOCounters</Link>
            <Link to="/PlatyConsole/Memory" className='nav-item nav-link'>Memory</Link>
            <Link to="/PlatyConsole/Disk" className='nav-item nav-link'>Devices</Link>	  			
          	</h2>
            </div>
			</nav>			
			</div>
		)
	}
}
