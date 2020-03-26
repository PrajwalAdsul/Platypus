import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';
import Header from '../Header';

export default class PlatyDetect extends Component {
  constructor(props) {
    super(props);
    this.state ={
      
    }
  }

  onSubmit = async e => {

    e.preventDefault();
    const data = {
   
    };
   
  }

	render() {
		return (
			<div>
      <Header/>
				<center>
				<br/> <br/> <br/> <br/>
				<h2>PlatyDetect</h2>
  	      <form onSubmit = {this.onSubmit}>
            <button type="submit" className="btn btn-primary">Run Malware Detection</button>
          </form>
    			</center>
			</div>
		)
	}
}
