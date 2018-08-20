import React, { Component } from 'react';
import LoginSignupHeader from './loginSignupHeader'
import SocialMediaLogin from './socialMediaLogin'
import FormField from './formField'
import LoginSignupActionButton from './loginSignupActionButton'
import '../../css/loginSignup.css';
import autoBind from 'react-autobind';


class LoginNow extends Component {
  constructor(props){
		super(props);
		 autoBind(this);
    this.state = {usernameNumber:false}
  }
/*userinput changes*/
  handleKeyUp(event)
  {
        if (!isNaN(event.target.value) && !event.target.value=="")
        {
	           this.setState({usernameNumber:true});
        }
        else
        {
	           this.setState({usernameNumber:false});
        }
  }
/*/userinput changes*/

  render() {
    return (

		<div className="makeFlex column loginForm">
		<LoginSignupHeader heading={"Login Now!"} subHeading={"Get Personalized Experience"} subHeading1={"And Travel Offers"}/>
		<SocialMediaLogin/>
{/*userinput changes*/}
    <div className={this.state.usernameNumber ? "formField userName userNumber":"formField userName"}>
      <label className="latoBold font12 flexOne lightGreyText">EMAIL OR MOBILE NUMBER<span className="labelInstruction">{this.props.instruction}</span></label>
      <input className="userNameInput latoBold " onKeyUp={this.handleKeyUp} type="text" />
      <span className="countryCode ">+91-</span>
      <p className="errorText font12 redText">Incorrect username entered. Please try again</p>
   </div>
{/*userinput changes*/}
		<FormField labelText={"PASSWORD"} placeholder={"Enter your user password"} errorText={"Incorrect password entered. Please try again"}/>
<div className="boxPadding makeFlex hrtlCenter column">
  	<LoginSignupActionButton title={"LOGIN"}/>
</div>
		<p className="makeFlex vrtlCenter boxPadding appendBottom40 ">
		<a href="#" className=" latoBold deepskyBlueText" onClick={()=>this.props.PageChange("forgotpassword")}>Forgot Password?</a>
		</p>

		<div className="loginSignupFooter textCenter padding16 latoBold">
		New to MakeMyTrip? <a  onClick={()=>this.props.PageChange("signup")} href="javascript:void(0)">Create an Account</a>
		</div>

  </div>


    );
  }

}

export default LoginNow;
