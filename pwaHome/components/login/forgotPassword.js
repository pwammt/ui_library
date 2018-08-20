import React, { Component } from 'react';
import LoginSignupHeader from './loginSignupHeader'
import SocialMediaLogin from './socialMediaLogin'
import FormField from './formField'
import LoginSignupActionButton from './loginSignupActionButton'
import ResetLink from './resetLink'
import autoBind from 'react-autobind';

class ForgotPassword extends Component {
  constructor(props){
    super(props);
    autoBind(this);
    this.state = {overlay:false};
  }

  overlayToggle(){
    this.setState({overlay:!this.state.overlay});
    if(!this.state.overlay){
      document.body.style.overflow = "hidden";
    }
      else{
        document.body.style.overflow = "visible";
      }
      }

  render() {
    return (

		<div className="makeFlex column">
      		<LoginSignupHeader heading={"Forgot Password"} subHeading={"We will send you a reset link to "} subHeading1={"your registered E-mail ID"}/>

      		<FormField labelText={"REGISTERED EMAIL ID"} placeholder={""} errorText={"Incorrect . Please try again"}/>

      		<div className="boxPadding makeFlex hrtlCenter column">
          <span onClick={this.overlayToggle} >
          		<LoginSignupActionButton  title={"SEND LINK"}/>
          </span>
      </div>
      	{this.state.overlay && <ResetLink PageChange={this.props.PageChange} overlayFunction={this.overlayToggle}/>}

  </div>


    );
  }

}

export default ForgotPassword;
