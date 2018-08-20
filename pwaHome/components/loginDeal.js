import React, { Component } from 'react';
import '../css/loginDeal.css';




class LoginDeal extends Component {
		
  render() {
    return (
		<div className="boxPadding bdrBottom2">
		<div className="makeFlex loginDealWrap">
		<span className="homeSprite loginDealBg"></span>
		<span className="whiteText flexOne pushRight paddingL16 appendBottom4"><span className="latoBlack">Login</span> to unlock deals & 
manage your bookings</span>
		
		</div>
	</div>
		
    );
  }
	
}

export default LoginDeal;
