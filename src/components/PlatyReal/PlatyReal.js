import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../MessageBundle';
import axios from 'axios';
import Header from '../Header';

const SList = props => (
    <tr>
        <td><center>{props.data}</center></td>
    </tr>
)

export default class PlatyReal extends Component {
  constructor(props) {
    super(props);
    this.state ={
      devices : [],
      data: [],
    };
  }

    componentDidMount() {
        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'pendrives')
            .then(response => {
                this.setState({
                    devices : response.data
                });
		alert('hello')
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })

	console.log('in submit')
	axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'readfile')
            .then(response => {
                 this.setState({
			data: response.data	
		})          
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
	

    acpiList() {
        return this.state.data.map(function(data, i) {
            return <SList data = {data} key={i} />;
        })
    }

	render() {
      if(localStorage.getItem('session') != "start"){
        return <Redirect push to = "/Login" />;
      }
		return (
			 <div className = 'container'>  
                <Header/>
			 	<center>                 
                    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    </nav>
                    <div>
                        <h2>All Devices</h2>
                        <table className = 'table table-striped' style={{marginTop: 20}}>
                            <tbody>
                                {this.devicesList()}
                            </tbody>
                        </table>
			<form onSubmit = {this.onSubmit}>
            <button type="submit" className="btn btn-primary">Check pheripheral devices actions</button>
          </form>
		                <h3> Actions : {this.acpiList()}   </h3>	
                    </div>
                </center>
              </div>
		)
	}
}
