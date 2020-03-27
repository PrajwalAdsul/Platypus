import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header';
import PHeader from './PHeader';
import SHeader from '../../SHeader';

const SList = props => (
    <div>
    <div className="card">
                <div className="card-body">
                  <h3 className="card-title"><b>{props.data.interface}</b></h3>
                  <div className="card-text">{props.data.address.map(u => (<p>{u}</p>))}</div>
                
                </div>
              </div>
   
    </div>

)

export default class AddressForAllInterfaces extends Component {
  constructor(props) {
    super(props);
    this.state ={
      physicalCores : 0, logicalCores : 0, cpuTimes : [], cpuPercent : 0,
      interfaces : [],
      addrs : [],
      a : []
    };
  }

    componentDidMount() {
        
        axios.get('http://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'interfaces')
            .then(response => {
                this.setState({
                    interfaces : response.data
                });
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('http://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'addressForAllInterfaces')
            .then(response => {
                this.setState({
                    addrs : response.data
                });
                console.log("*********");
                console.log(this.state.addrs);
                console.log("*********");

            })
            .catch(function(error) {
                console.log(error);
            })
    }


    troublesListf() {
       // filter(book => book.shelf === shelf)
        return this.state.addrs.map(
            function(data, i) {
                return <SList data = {data} key={i} />;
            }
        )
    }
    troublesListf1() {
       // filter(book => book.shelf === shelf)
        return this.state.interfaces.map(
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
            <h2>
            <center>
            {this.troublesListf()}
                 </center>
                </h2>
			</div>
		)
	}
}
