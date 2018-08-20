import React, { Component } from 'react';
import LoginSignupActionButton from './loginSignupActionButton'
import LoginSignupHeader from './loginSignupHeader'



class ResetLink extends Component {

  render() {
    return (

		<div className="makeFlex column animated visible slideUpEffect sentLinkOverlay">
    <span className="iconCross homeSprite " onClick={this.props.overlayFunction}> </span>

  	<LoginSignupHeader heading={"Reset Link Sent"} subHeading={"Follow the instructions in the "} subHeading1={"mail to reset your password"}/>

		<div className="makeFlex perfectCenter tickSection">
<span className="iconTickWrapper makeFlex perfectCenter">
  <span className="homeSprite iconTick ">

  </span>

</span>
    </div>


<div className="boxPadding makeFlex hrtlCenter column">
<span  onClick={()=>this.props.PageChange("login")}>
    <LoginSignupActionButton title={"GO TO LOGIN"}/>
    </span>
    </div>
    <p className="font12 textCenter lightGreyText boxPadding">
If you haven't received the email, check your spam folder or search for 'noreply@makemytrip.com'
    </p>



  </div>


    );
  }

}

export default ResetLink;
