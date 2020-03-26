import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import Header from '../Header';

export default class PhysicalCores extends Component {
  constructor(props) {
    super(props);
    this.state ={
      PhysicalCores : 0
    };
  }

    componentDidMount() {
        axios.get('http://localhost:5000/physicalCores')
            .then(response => {
                this.setState({
                    PhysicalCores : response.data
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
				<h2>No of Physical Cores</h2>
        <h3> {this.state.PhysicalCores} </h3>
    		</center>
			</div>
		)
	}
}
