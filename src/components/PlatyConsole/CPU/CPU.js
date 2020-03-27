import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import classNames from 'classnames';
//import { UserRegistration, UsernameValidation } from '../services/RegistrationService';
import { REGISTRATION_FIELDS, REGISTRATION_MESSAGE, COMMON_FIELDS, ERROR_IN_REGISTRATION } from '../../MessageBundle';
import axios from 'axios';
import PieChart from './PieChart';
import LogicalCores from './LogicalCores';
import PhysicalCores from './PhysicalCores';
import Header from '../Header';
import SHeader from '../../SHeader';

export default class CPU extends Component {
  constructor(props) {
    super(props);
    this.state ={
      physicalCores : 0, logicalCores : 0, cpuTimes : [], cpuPercent : 0,
        guest: "0.0",
        guest_nice: "0.0",
        idle: "19193.18",
        iowait: "305.83",
        irq: "0.0",
        nice: "12.49",
        softirq: "70.36",
        steat: "0.0",
        system: "896.2",
        user: "3530.58",
        pguest: "0.0",
        pguest_nice: "0.0",
        pidle: "19193.18",
        piowait: "305.83",
        pirq: "0.0",
        pnice: "12.49",
        psoftirq: "70.36",
        psteat: "0.0",
        psystem: "896.2",
        puser: "3530.58"
    };
  }

    componentDidMount() {
        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'logicalCores')
            .then(response => {
                this.setState({
                    logicalCores : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'physicalCores')
            .then(response => {
                this.setState({
                    physicalCores : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })


        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'cpuPercent')
            .then(response => {
                this.setState({
                    cpuPercent : response.data
                });
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })

        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'cpuTimes')
            .then(response => {
                const dat = response.data;
                this.setState({
                     guest: dat["guest"],
                    guest_nice: dat["guest_nice"],
                    idle: dat["idle"],
                    iowait: dat["iowait"],
                    irq: dat["irq"],
                    nice: dat["nice"],
                    softirq: dat["softirq"],
                    steat: dat["steat"],
                    system: dat["system"],
                    user: dat["user"]
                }); 
                console.log(dat)
            })
            .catch(function(error) {
                console.log(error);
            })


        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'cpuTimesPercent')
            .then(response => {
                const dat = response.data;
                this.setState({
                    pguest: dat["guest"],
                    pguest_nice: dat["guest_nice"],
                    pidle: dat["idle"],
                    piowait: dat["iowait"],
                    pirq: dat["irq"],
                    pnice: dat["nice"],
                    psoftirq: dat["softirq"],
                    psteat: dat["steat"],
                    psystem: dat["system"],
                    puser: dat["user"]
                }); 
                console.log(dat)
            })
            .catch(function(error) {
                console.log(error);
            })

    }

	render() {
        if(localStorage.getItem('session') != "start"){
            return <Redirect push to = "/Login" />;
          }
		return (
			<div>
            <SHeader/>
            <Header/>
				<center>
				<br/> <br/> <br/> <br/>
				
                <LogicalCores/>
                <PhysicalCores/>

                <div  className = 'jumbotron'>
                <h2>CPU Utilization Percentage</h2>
                <h3> {this.state.cpuPercent}</h3>
                </div>

                <div  className = 'jumbotron'>
                <h2>CPU times</h2>
                <h3> Guest : {this.state.guest}   </h3>
                <h3> Guest_nice : {this.state.guest_nice}   </h3>
                <h3> Idle : {this.state.idle} </h3>
                <h3> Iowait : {this.state.iowait} </h3>
                <h3> IRQ : {this.state.irq} </h3>
                <h3> Nice : {this.state.nice} </h3>
                <h3> SoftIRQ : {this.state.softirq} </h3>
                <h3> Steat : {this.state.steat} </h3>
                <h3> System : {this.state.system} </h3>
                <h3> User : {this.state.user} </h3>
                </div>

                <div  className = 'jumbotron'>
                <h2>CPU times percentage</h2>
                <h3> Guest : {this.state.pguest}   </h3>
                <h3> Guest_nice : {this.state.pguest_nice}   </h3>
                <h3> Idle : {this.state.pidle} </h3>
                <h3> Iowait : {this.state.piowait} </h3>
                <h3> IRQ : {this.state.pirq} </h3>
                <h3> Nice : {this.state.pnice} </h3>
                <h3> SoftIRQ : {this.state.psoftirq} </h3>
                <h3> Steat : {this.state.psteat} </h3>
                <h3> System : {this.state.psystem} </h3>
                <h3> User : {this.state.puser} </h3>
                </div>

                <PieChart guest = {this.state.pguest} guest_nice = {this.state.pguest_nice} 
                idlt = {this.state.pidle} iowait = {this.state.piowait} irq = {this.state.pirq}
                nice = {this.state.pnice} softirq = {this.state.psoftirq} steat = {this.state.psteat}
                system = {this.state.psystem} user = {this.state.user}
                />


        	</center>
			</div>
		)
	}
}
