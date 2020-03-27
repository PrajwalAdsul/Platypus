import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";

import Terminal from 'terminal-in-react';
import axios from 'axios';
import PlatyTerminal from './PlatyTerminal/PlatyTerminal';
import PlatyRun from './PlatyTerminal/PlatyRun';
import PieChart from './PieChart';
import PlatyShare from './PlatyShare/PlatyShare';
import PlatyDetect from './PlatyDetect/PlatyDetect';
import PlatyConsole from './PlatyConsole/PlatyConsole';
import PlatyReal from './PlatyReal/PlatyReal';
import Network from './PlatyConsole/Network/Network';
import CPU from './PlatyConsole/CPU/CPU';
import Process from './PlatyConsole/Process/Process';
import Space from './PlatyConsole/Disk/Space';
import Disk from './PlatyConsole/Disk/Disk';
import Memory from './PlatyConsole/Memory/Memory';
import DiskIOCounters from './PlatyConsole/Disk/DiskIOCounters';
import Header from './Header'; 
import AddressFamilies from './PlatyConsole/Network/AddressFamilies';
import AddressForAllInterfaces from './PlatyConsole/Network/AddressForAllInterfaces';
import AllNICs from './PlatyConsole/Network/AllNICs';
import Gateways from './PlatyConsole/Network/Gateways';
import Login from './Login';


class App extends Component {
	render() {
		return (
			<div>	
				<Router>
					<div className="App">
					<Switch>
						<Route exact path="/PlatyTerminal" component={PlatyTerminal} />
						<Route exact path="/PlatyRun" component={PlatyRun} />
						<Route exact path = "/PlatyShare" component = {PlatyShare} />
						<Route exact path = "/PlatyDetect" component = {PlatyDetect} />
						<Route exact path = "/PlatyConsole" component = {PlatyConsole} />
						<Route exact path = "/PlatyConsole/Network" component = {Network} />
						<Route exact path = "/PlatyConsole/Network/AddressFamilies" component = {AddressFamilies} />
						<Route exact path = "/PlatyConsole/Network/AddressForAllInterfaces" component = {AddressForAllInterfaces} />
						<Route exact path = "/PlatyConsole/Network/AllNICs" component = {AllNICs} />
						<Route exact path = "/PlatyConsole/Network/Gateways" component = {Gateways} />
						<Route exact path = "/PlatyConsole/CPU" component = {CPU} />		
						<Route exact path = "/PlatyConsole/Process" component = {Process} />			
						<Route exact path = "/PlatyConsole/Memory" component = {Memory} />			
						<Route exact path = "/PlatyConsole/Disk" component = {Disk} />	
						<Route exact path = "/PlatyConsole/Disk/Space" component = {Space} />	
						<Route exact path = "/PlatyConsole/Disk/DiskIOCounters" component = {DiskIOCounters} />	
						<Route exact path = "/PlatyReal" component = {PlatyReal} />		
						<Route exact path = "/Login" component = {Login}/>
						<Redirect from="/" to="/Login" />
					</Switch>
					</div>
				</Router>	
				<link
				  rel="stylesheet"
				  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				  crossOrigin="anonymous"
				/>
			</div>	
		);
	}
}
export default App;
