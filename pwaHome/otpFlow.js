import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import FormField from './components/login/formField'
import OtpInput from './components/otpInput'
import OtpMobileNumber from './components/otpMobileNumber'
import './css/otpFlow.css';

class OtpFlow extends Component {

	constructor(props){
    super(props);
    autoBind(this);
   this.state=
   {otpFlow:"step1"}



 }
 PageChange(pagename)
 {
 this.setState({otpFlow:pagename})
 }


	   render() {
	      return (




<div className="otpPage animated slideUpEffect">
<span className="homeSprite backIcon">&nbsp;</span>
{this.state.otpFlow=="step1" && <OtpMobileNumber PageChange={this.PageChange}/>}
{this.state.otpFlow=="step2" && <OtpInput/>}
</div>




	      );
	   }
	}

export default OtpFlow;
