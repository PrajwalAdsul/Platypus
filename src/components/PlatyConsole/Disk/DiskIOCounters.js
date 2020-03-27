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
                  <td>{props.data.read_count}</td>
                  <td>{props.data.write_count}</td>
                  <td>{props.data.read_bytes}</td>
                  <td>{props.data.write_bytes}</td>
                  <td>{props.data.read_time}</td>  
                  <td>{props.data.write_time}</td>  
                  <td>{props.data.read_merged_count}</td>  
                  <td>{props.data.write_merged_count}</td>  
                  <td>{props.data.busy_time}</td>  
    </tr>
)

export default class DiskIOCounters extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : []
    };
  }

    componentDidMount() {
        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'DiskIOCounters')
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
		return (
			<div>
            <SHeader/>
           <Header/>
           <h2>
           <table className = 'table table-striped' style={{marginTop: 20}}>
                      <thead>
                          <tr>
                            <th>Read Count  </th>
                              <th>Write Count </th>
                              <th>Read Bytes </th>
                              <th>Write Bytes </th>
                              <th>Read Time </th>
                              <th>Write Time </th>
                              <th>Read Merged Count </th>
                              <th>Write Merged Count </th>
                              <th>Busy Time </th>
                              
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
