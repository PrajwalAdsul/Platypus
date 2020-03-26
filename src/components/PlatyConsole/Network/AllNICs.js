import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import Header from '../Header';
import PHeader from './PHeader';
import SHeader from '../../SHeader';

const SList = props => (
    <tr>
        <td>{props.data}</td></tr>
)

export default class AllNICs extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allNICs : []
    };
  }

    componentDidMount() {
        axios.get('http://localhost:5000/allNICs')
            .then(response => {
                this.setState({
                    allNICs : response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    troublesListf() {
       // filter(book => book.shelf === shelf)
        return this.state.allNICs.map(
            function(data, i) {
                return <SList data = {data} key={i} />;
            }
        )
    }

	render() {
		return (
			<div  className = 'jumbotron'>
            <SHeader/>
            <Header/>
            <PHeader/>
            <center><h2>NICs</h2>
			 <h2>{this.troublesListf()} </h2>
             </center>
			</div>

		)
	}
}
