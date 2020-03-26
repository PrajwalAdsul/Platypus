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
            <h2><b>PlatyReal</b></h2>
            </a>
            <div className="nav navbar-nav ml-auto">
            <h2>
            <Link to="/PlatyReal/AllDevices" className='nav-item nav-link'>All Devices</Link>
            <Link to="/PlatyReal/Peripherals" className='nav-item nav-link'>Peripherals</Link>
            </h2>
            </div>
            </nav>          
            </div>
        )
    }
}
