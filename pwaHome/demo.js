import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavLink from "./components/navLink";
import './css/demo.css';




class Demo extends Component {

  render() {
    return (

		 <div className="demoWrap">
			 <img className="appendBottom20" src="images/logo.png"/>
		<p className="font16 lightGreyText latoBold">React PWA Home Demo</p>
		<div className="makeFlex vrtlCenter demoDownload">
			 <ul className="font16 latoBold demoLink greyText">
			 <li><NavLink  to={'/components/loginSignup'}>Login/Signup </NavLink></li>
			  <li><NavLink  to={'otpFlow'}>OTP Flow</NavLink></li>
			 <li><NavLink  to={'/homePage'}>Hompage</NavLink></li>
			 <li><NavLink  to={'/railPnrStatus'}>Rail PNR Status</NavLink></li>
			 <li><NavLink  to={'/liveTrainStatus'}> Live Train Status</NavLink></li>
		
			 <li><NavLink  to={'/railCoachPosition'}>Rail Coach Position</NavLink></li>
			 <li><NavLink  to={'/OffersPage'}>Offers Page</NavLink></li>
			<li><NavLink  to={'/components/pageloader'}>Page Error</NavLink></li>
			<li><NavLink  to={'/accountPage'}>Account Page</NavLink></li>
			<li><NavLink  to={'/components/accountDetails'}>Account Details </NavLink></li>
			<li><NavLink  to={'/components/accountDetailsEdit'}>Account Details Edit</NavLink></li>
			<li><NavLink  to={'/components/resetPassword'}>Reset Password</NavLink></li>
			 </ul>

			</div>

        </div>


    );
  }

}

export default Demo;
