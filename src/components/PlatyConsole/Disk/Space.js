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
                  <td>{props.data.total}</td>
                  <td>{props.data.used}</td>
                  <td>{props.data.free}</td>
                  <td>{props.data.percent}</td>  
    </tr>
)

export default class Space extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : []
    };
  }

    componentDidMount() {
        const data = {'device' : this.props.location.state.device}
        axios.post('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'disk_usage', data)
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
       return this.state.allProcesses.map(
            function(data, i) {
                return <SList data = {data} key={i} />;
            }
        )
    }

	render() {
		return (
			<div>  
      <SHeader />
      <Header />
      <h2>
         <Link  
                  to={{
                  pathname: '/PlatyConsole/Disk',
                 }}
           className='nav-item nav-link'>Back</Link>
         <table className = 'table table-striped' style={{marginTop: 20}}>
                      <thead>
                          <tr>
                              <th> Total </th>
                              <th> Used </th>
                              <th> Free </th>
                              <th> Percent </th>
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
