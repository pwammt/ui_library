import React, { Component } from 'react';
import autoBind from 'react-autobind';
import LoginNow from './login/loginNow'
import ForgotPassword from './login/forgotPassword'
import ResetLink from './login/resetLink'
import SignUp from './login/signUp'
import '../css/loginSignup.css';


class LoginSignup  extends Component {

  constructor(props){
    super(props);
    autoBind(this);
   this.state=
   {loginFlow:"login"}



 }
 PageChange(pagename)
 {
 this.setState({loginFlow:pagename})
 }
  render() {



	    return (
		<div className="animated slideUpEffect loginSignupWrap">
			<span className="homeSprite backIcon">&nbsp;</span>
			<form>
    		{this.state.loginFlow=="login" &&	<LoginNow PageChange={this.PageChange}/>}
    		{this.state.loginFlow=="signup" &&	<SignUp PageChange={this.PageChange}/>}
    		{this.state.loginFlow=="forgotpassword" &&	<ForgotPassword PageChange={this.PageChange}/>}
    	</form>
		</div>

    );
  }
}

export default LoginSignup;
