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
                 <td>{props.data.addressFamily}</td>
                  <td>{props.data.ip}</td>
                  <td>{props.data.name}</td>
    </tr> 
)

export default class Gateways extends Component {
  constructor(props) {
    super(props);
    this.state ={
      allNICs : []
    };
  }

    componentDidMount() {
        axios.get('http://localhost:5000/gateways')
            .then(response => {
                this.setState({
                    allNICs : response.data
                });
                console.log("*********");
                console.log(response.data)
                console.log("*********");
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
            <center><h1>Gateways</h1>
            </center>
                <h2>
              <table className = 'table table-striped' style={{marginTop: 20}}>
                      <thead>
                          <tr>
                              <th> AddressFamily </th>
                              <th> IP </th>
                              <th> Name </th>
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
