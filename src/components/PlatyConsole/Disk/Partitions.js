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
                  <td>{props.data.device}</td>
                  <td>{props.data.mountpoint}</td>
                  <td>{props.data.fstype}</td>
                  <td>{props.data.opts}</td>  
                  <td><Link  
                       to={{
                  pathname: '/PlatyConsole/Disk/Space',
                  state: {
                    device : props.data.mountpoint
                  }}}
           className='nav-item nav-link'>Space</Link></td>
    </tr>
)

export default class Partitions extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allProcesses : []
    };
  }

    componentDidMount() {
        axios.get('http://localhost:5000/partitions')
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
           <table className = 'table table-striped' style={{marginTop: 20}}>
                      <h2>
                      <thead>
                          <tr>
                              <th> Device </th>
                              <th> Mount Point </th>
                              <th> File System </th>
                              <th> Opts </th>
                              <th> Space </th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.troublesListf()}
                      </tbody>
                      </h2>
          </table>

			</div>
		)
	}
}
