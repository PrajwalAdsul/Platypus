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



export default class PlatyDetect extends Component {
  constructor(props) {
    super(props);
    this.state ={
     data: [] 
    }
  }

  onSubmit = async e => {

    e.preventDefault();
    const data = {
   	
    };
   
  }

   componentDidMount() {
        axios.get('https://' + localStorage.getItem('secret_key') + '.ngrok.io/' + 'malwaredetection')
            .then(response => {
                this.setState({
                    data : response.data
                });

                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            })
}
    malwareList() {
        return this.state.data.map(function(data, i) {
            return <SList data = {data} key={i} />;
        })
    }



	render() {
     if(localStorage.getItem('session') != "start"){
        return <Redirect push to = "/Login" />;
      }
		return (
			<div>
      <Header/>
				<center>
				<br/> <br/> <br/> <br/>
				<h2>PlatyDetect</h2>
  	      <form onSubmit = {this.onSubmit}>
            <button type="submit" className="btn btn-primary">Run Malware Detection</button>
          </form>
			                <h3> Output : {this.malwareList()}   </h3>	
    			</center>
			</div>
		)
	}
}
