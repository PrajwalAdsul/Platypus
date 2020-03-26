import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import Error from '../elements/Error';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';
import Header from './Header';

const SList = props => (
    <tr>
        <td>{props.data.left}</td>
        <td>{props.data.right}</td>
    </tr>
)

export default class Terminal extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			left : '',
			right : 'r'
		};
	}
	
	handleOnChangeLeft = e => {
		this.setState({
			left : e.target.value
		});
	}

	onSubmit = async e => {

		e.preventDefault();
		const data = {
			command : this.state.left
		};

		console.log(data);
		var res, ans;
		console.log(data);
		await axios.get('http://127.0.0.1:5000/shell/' + data.command)
		.then(response => {
			res = response.status;
			this.setState({
						right : response
			});
			console.log("correct");
		})
		.catch(error => {
			console.log(error.response);
		});

			if(res === 200) {
					this.setState({
						right : ans
					});
			} else this.setState({
	
			});
		}

	render() {
		return (
			<div>
				<Header/>
				<div><h1>Terminal</h1> </div>
				<form onSubmit = {this.onSubmit}>
						<p>command </p>
						<input type="text" value={this.state.left} name="left" onChange={this.handleOnChangeLeft}/>
						<button type="submit" className="btn btn-primary">apply</button>				
				</form>
				{this.state.left}
				{this.state.right}
			</div>
		)
	}
}
