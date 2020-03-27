import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header';
import SHeader from '../../SHeader';

const SList = props => (
   <tr>
                  <td>{props.data.type}</td>
                  <td>{props.data.total}</td>
                  <td>{props.data.used}</td>
                  <td>{props.data.free}</td>
                  <td>{props.data.percent}</td>
                  <td>{props.data.sin}</td>
                  <td>{props.data.sout}</td>
    </tr>
)

export default class Memory extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : []
    };
  }

    componentDidMount() {
        axios.get('http://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'memory')
            .then(response => {
                this.setState({
                    allProcesses : response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    troublesListf() {
       // filter(book => book.shelf === shelf)
        return this.state.allProcesses.map(
            function(data, i) {
                return <SList data = {data} key={i} />;
            }
        )
    }

	render() {
     if(localStorage.getItem('session') != "start"){
        return <Redirect push to = "/Login" />;
      }
		return (
			<div>
      <SHeader/>
        <Header/>
        <h2>
           <table className = 'table table-striped' style={{marginTop: 20}}>
                      <thead>
                          <tr>
                              <th> Type </th>
                              <th> Total </th>
                              <th> Used </th>
                              <th> Free </th>
                              <th> Percent </th>             
                              <th> Sin </th>
                              <th> Sout </th>
                              
                          </tr>
                      </thead>
                      <tbody>
                          {this.troublesListf()}
                      </tbody>
                  </table>
        </h2>
			</div>
		)
	}
}
