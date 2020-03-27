import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';
import SendFilePlatyShare from './SendFilePlatyShare';
import GetFilePlatyShare from './GetFilePlatyShare';
import PlatyTerminal from '../PlatyTerminal/PlatyTerminal';
import Header from '../Header';

export default class PlatyShare extends Component {
	render() {
	 if(localStorage.getItem('session') != "start"){
        return <Redirect push to = "/Login" />;
      }
		return (
			<div>
				<Header/>
				<center><h1>Platy Share</h1></center>
				<SendFilePlatyShare />
				<GetFilePlatyShare />
				<PlatyTerminal/>
			</div>
		)
	}
}
