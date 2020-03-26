import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import Header from '../Header';
import PHeader from './PHeader';
import SHeader from '../../SHeader';

export default class AddressFamilies extends Component {
  constructor(props) {
    super(props);
    this.state ={
    };
  }
	render() {
		return (
			<div className = 'jumbotron'>
                <SHeader/>
                <Header/>
                <PHeader/>
				<center>
				<br/> <br/> <br/> <br/>
			     <h2>Address Families Numbers</h2>
                 <h4>
                 "AF_APPLETALK : 5" <br/>
        "AF_ASH : 18"<br/>
        "AF_ATMPVC : 8"<br/>
        "AF_ATMSVC : 20"<br/>
        "AF_AX25 : 3"<br/>
        "AF_BLUETOOTH : 31"<br/>
        "AF_BRIDGE : 7"<br/>
        "AF_DECnet : 12"<br/>
        "AF_ECONET : 19"<br/>
        "AF_FILE : 1"<br/>
        "AF_INET : 2"<br/>
        "AF_INET6 : 10"<br/>
        "AF_IPX : 4"<br/>
        "AF_IRDA : 23"<br/>
        "AF_ISDN : 34"<br/>
        "AF_KEY : 15"<br/>
        "AF_LINK : 17"<br/>
        "AF_NETBEUI : 13"<br/>
        "AF_NETLINK : 16"<br/>
        "AF_NETROM : 6"<br/>
        "AF_PACKET : 17"<br/>
        "AF_PPPOX : 24"<br/>
        "AF_ROSE : 11"<br/>
        "AF_ROUTE : 16"<br/>
        "AF_SECURITY : 14"<br/>
        "AF_SNA : 22"<br/>
        "AF_UNIX : 1"<br/>
        "AF_UNSPEC : 0"<br/>
        "AF_WANPIPE : 25"<br/>
        "AF_X25 : 9"<br/>
                 </h4>
        	</center>
			</div>
		)
	}
}
