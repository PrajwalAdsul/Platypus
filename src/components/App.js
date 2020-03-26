import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";

import Terminal from 'terminal-in-react';
import axios from 'axios';
import PlatyTerminal from './PlatyTerminal/PlatyTerminal';
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
import AllDevices from './PlatyReal/AllDevices';
import Peripherals from './PlatyReal/Peripherals';

class App extends Component {
	render() {
		return (
			<div>	
				<Router>
					<div className="App">
					<Switch>
						<Route exact path="/PlatyTerminal" component={PlatyTerminal} />
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
						<Route exact path = "/PlatyReal/AllDevices" component = {AllDevices} />	
						<Route exact path = "/PlatyReal/Peripherals" component = {Peripherals} />	
							
						<Redirect from="/" to="/PlatyTerminal" />
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



/*
import React, { Component } from 'react';
import { Types } from './lib';
import FileManagerWrapper from './FileManagerWrapper';
import axios from 'axios';

const initial = {
	'0': {
		id: '0',
		title: 'Root',
		type: Types.folder,
		children: ['1'],
		parent: null,
	},
	'1': {
		id: '1',
		title: 'title1',
		type: Types.folder,
		children: ['2', '3'],
		parent: '0',
	},
	'2': {
		id: '2',
		title: 'title2',
		type: Types.file,
		children: [],
		parent: '1',
	},
	'3': {
		id: '3',
		title: 'title3',
		type: Types.folder,
		children: ['4', '5', '6'],
		parent: '1',
	},
	'4': {
		id: '4',
		title: 'title4',
		type: Types.file,
		children: [],
		parent: '3',
	},
	'5': {
		id: '5',
		title: 'title5',
		type: Types.file,
		children: [],
		parent: '3',
	},
	'6': {
		id: '6',
		title: 'title3',
		type: Types.folder,
		children: ['7'],
		parent: '1',
	},
	'7': {
		id: '7',
		title: 'title3',
		type: Types.folder,
		children: ['8'],
		parent: '1',
	},
	'8': {
		id: '8',
		title: 'title3',
		type: Types.folder,
		children: ['9'],
		parent: '1',
	},
	'9': {
		id: '9',
		title: 'title3',
		type: Types.folder,
		parent: '1',
	},
};

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			map: initial,
		};
	}

	onOutsideDrop = (parentId, files) => {
		if (files.length <= 3) {
			let data = new FormData();
			for (let i = 0; i < files.length; i++) {
				data.append('files', files[i]);
			}
			axios
				.post('http://localhost:8000/upload', data)
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		}
	};

	render() {
		const { map } = this.state;
		return (
			<FileManagerWrapper
				map={map}
				rootId="0"
				onChange={map => this.setState({ map })}
				onOutsideDrop={this.onOutsideDrop}
				dropzoneConfig={{
					name: 'files',
					inputProps: {
						type: 'file',
						enctype: 'multipart/form-data',
						action: '/files',
						method: 'post',
					},
				}}
			/>
		);
	}
}
*/