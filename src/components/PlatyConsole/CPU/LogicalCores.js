import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import Header from '../Header';

export default class LogicalCores extends Component {
  constructor(props) {
    super(props);
    this.state ={
      logicalCores : 0
    };
  }

    componentDidMount() {
        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'logicalCores')
            .then(response => {
                this.setState({
                    logicalCores : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
    }

	render() {
		return (
			<div  className = 'jumbotron'>
            	 <center>
				<br/> <br/> <br/> <br/>
				<h2>No of Logical Cores</h2>
        <h3> {this.state.logicalCores} </h3>
    		</center>
			</div>
		)
	}
}
