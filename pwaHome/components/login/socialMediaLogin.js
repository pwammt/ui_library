import React, { Component } from 'react';


class SocialMediaLogin extends Component {
	
  render() {
    return (
		
		<div className="boxPadding makeFlex vrtlCenter">
		<a className="facebookLogin makeFlex perfectCenter whiteText latoBlack appendRight8" href="#"> <span className="loginSignupSprite facebookLoginIcon  appendRight16"></span> <span>Facebook</span> </a>
		<a className="googleLogin makeFlex perfectCenter darkGreyText latoBlack appendLeft8" href="#"><span className="loginSignupSprite googleLoginIcon  appendRight16"></span> <span>Google</span></a>
</div>

	
		
    );
  }
	
}

export default SocialMediaLogin;
