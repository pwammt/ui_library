import React, { Component } from 'react';
import LoginSignupHeader from './loginSignupHeader'
import SocialMediaLogin from './socialMediaLogin'
import FormField from './formField'
import LoginSignupActionButton from './loginSignupActionButton'


class SignUp extends Component {

  render() {
    return (

		<div className="makeFlex column">
		<LoginSignupHeader heading={"Signup Now!"} subHeading={"Earn Rewards, Get Personalized"} subHeading1={"Experience And Travel Offers"}/>
		<SocialMediaLogin/>
		<FormField labelText={"FIRST NAME"} placeholder={"Enter your user first name"} errorText={"Incorrect first name entered. Please try again"}/>

		<FormField labelText={"LAST NAME"} placeholder={"Enter your user last name"} errorText={"Incorrect last name entered. Please try again"}/>

    	<FormField labelText={"PHONE"} instruction="Optional" placeholder={""} errorText={""}/>
				<FormField labelText={"EMAIL"} instruction="This will used as your user name"  placeholder={""} errorText={"Incorrect Email Id. Please try again"}/>
		<FormField labelText={"PASSWORD"} placeholder={"Enter your user password"} errorText={"Incorrect password entered. Please try again"}/>
<div className="boxPadding makeFlex hrtlCenter column">
		<LoginSignupActionButton title={"SIGNUP"}/>
</div>
		<p className="textCenter appendBottom4">By signing up, you agree to MakeMyTrips</p>
	<p className="appendBottom20 textCenter">	<a href="#" className=" latoBold deepskyBlueText ">Terms & Conditions</a></p>


		<div className="loginSignupFooter textCenter padding16 latoBold">
	Already a member?  <a onClick={()=>this.props.PageChange("login")}  href="javascript:void(0)">Login Now</a>
		</div>

  </div>


    );
  }

}

export default SignUp;
