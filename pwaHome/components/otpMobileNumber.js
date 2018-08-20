
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import FormField from './login/formField'
import '../css/otpFlow.css';

class OtpMobileNumber extends Component {

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

<div className="boxPadding otpStep1 textCenter ">
		<p className="latoBlack font22 appendBottom10	">Verify Mobile Number</p>
		<p className=" width250px marginAuto appendBottom20 font16">Verify your mobile number and you are good to go</p>
		<div className="textLeft">
				<FormField  labelText={"ENTER MOBILE NUMBER"} placeholder={"+91"} errorText={"Incorrect . Please try again"}/>
		</div>
		<p ><span onClick={()=>this.props.PageChange("step2")}><a href="javascript:void(0)" className="sendOtpBtn primaryBtn latoBlack">SEND OTP</a> </span></p>
		<p className="darkGreyText font12 textLeft tncText ">Your number will be stored securely in our servers and will not be shared with anyone.
		Read our <a className="latoBold">Privacy Policy</a> to know more. By proceeding further you agree to our <a className="latoBold">Terms and Conditions </a></p>
</div>



	      );
	   }
	}

export default OtpMobileNumber;
