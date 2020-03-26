import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';
import CPU from './CPU/CPU';
import Network from './Network/Network';
import Process from './Process/Process';
import Header from './Header';
export default class PlatyDetect extends Component {
  constructor(props) {
    super(props);
    this.state ={
    };
  }

	render() {
		return (
			<div>
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
      <Header/>
				<center>
				<br/> <br/> <br/> <br/>
				<h1  className = 'jumbotron'>PlatyConsole</h1>
    			</center>
			</div>
		)
	}
}
