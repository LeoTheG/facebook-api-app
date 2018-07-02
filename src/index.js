import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) =>{
    console.log(response);
}
const componentClicked = ()=>{
    console.log("clicked");
}

ReactDOM.render(
    <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email<Plug>PeepOpenicture"
    onClick={componentClicked}
    callback={responseFacebook} />,
    document.getElementById('demo')
);






registerServiceWorker();
