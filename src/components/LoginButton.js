import React from 'react';

const FB = window.FB;
const axios = require('axios');

export default class LoginButton extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			msg : "Hello",
			scope: props.scope
		};
        console.log(props);
		this.clicked=this.clicked.bind(this);
	}

	clicked(){

		FB.login((response)=>{
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me',(response)=>{
                    console.log(JSON.stringify(response));
					this.setState({msg:"Hello, " + response.name});
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		},{scope:this.state.scope});
	}
	render(){
		return(<div>

				<h1> {this.state.msg} </h1>

				<button onClick={this.clicked}>Facebook Login</button>

				</div>);
	}
}

