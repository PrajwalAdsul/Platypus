import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import AddressFamilies from './AddressFamilies';
import AllNICs from './AllNICs';
import AddressForAllInterfaces from './AddressForAllInterfaces';
import Gateways from './Gateways';
import Header from '../Header';
import PHeader from './PHeader';
import SHeader from '../../SHeader';

export default class Network extends Component {
  constructor(props) {
    super(props);
    this.state ={
     };
  }
    componentDidMount() {   
    }
	render() {
		return (
			<div>
                <SHeader/>
                <Header/>
                <PHeader/>
			</div>
		)
	}
}
