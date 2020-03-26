import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";

// import Terminal from './Terminal';
// import PieChart from './PieChart';
import Terminal from 'terminal-in-react';
import axios from 'axios';

/*
//import SignIn from './SignIn'
import Registration from './Registration';
import StartupList from './StartupList';
import ApplicationList from './ApplicationList';
*/
class App extends Component {
	render() {
		return (
			<div>		
				<Terminal
				  commandPassThrough={async (cmd, print) => {
				    // do something async
				    await axios.post('http://localhost:5000/shell', cmd)
					.then(response => {
						print(response.data);
						// console.log(response);
						// isUsernameTaken = response.status;
					})
				    // if(cmd == "ls"){
				     	print(`********************`);
				    // }
				    // else
				    // print(`-PassedThrough:${cmd}: command not found`);
				  }}
				/>
			</div>
		);
	}
}
export default App;

/*

<center><h1>OpsConsole</h1></center>
				<PieChart/>
				<Router>
					<div className="App">
					<Switch>
						<Route exact path="/Terminal" component={Terminal} />
						<Redirect from="/" to="Terminal" />
					</Switch>
					</div>
				</Router>	

<center><h1>Leo Mine</h1></center>
			<Router>
					<div className="App">
					<Switch>
						<Route exact path="/DROLogin" component={DROLogin} />
						<Route exact path="/AddArea" component={AddArea} />
						<Route exact path="/ShowCrimes" component={ShowCrimes}/>
						<Route exact path="/ShowAreas" component={ShowAreas}/>
						<Route exact path = "/WebScrap" component={WebScrap}/>
						<Redirect from="/" to="DROLogin" />
					</Switch>
					</div>
				</Router>	
*/