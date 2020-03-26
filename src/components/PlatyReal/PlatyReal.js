import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';
import Header from '../Header';
import PHeader from './PHeader';

const SList = props => (
    <tr>
        <td><center><h2>{props.data}</h2></center></td>
    </tr>
)

export default class PlatyReal extends Component {
  constructor(props) {
    super(props);
    this.state ={
      devices : [],
      pd : []
    };
  }

    componentDidMount() {
        axios.get('http://localhost:5000/getAllDevices')
            .then(response => {
                this.setState({
                    devices : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    devicesList() {
        return this.state.devices.map(function(data, i) {
            return <SList data = {data} key={i} />;
        })
    }


    pddevicesList() {
        return this.state.pd.map(function(data, i) {
            return <SList data = {data} key={i} />;
        })
    }


  onSubmit = async e => {

    e.preventDefault();
    const data = {
   
    };
     axios.get('http://localhost:5000/pendrives')
            .then(response => {
                this.setState({
                    pd : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
  }

	render() {
		return (
			 <div className = 'container'>  
                <Header/>
                <PHeader/>
			 	<center>                 
                    <nav className='navbar  navbar-light bg-light'>
                        <center><h2>Now see all devices</h2></center>
                    </nav>            
                </center>
              </div>
		)
	}
}
