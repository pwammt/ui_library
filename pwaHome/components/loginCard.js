import React, { Component } from 'react';


class loginCard extends Component {


  render() {

	    return (
        <div className="makeFlex boxPadding">
          
          <div className="loginCard">
          <img src="images/loginBanner.png"/>

          <p className="font20 latoBlack blackText appendBottom10">Login now & pay <span className="orangeText">zero</span> convenience fee</p>
          <p className=" font16 appendBottom20">Now you can use your wallet money to pay your convenience
fee on train bookings.</p>

<p className=" font16 appendBottom20">That's literally online train bookings at <span className="latoBold">no extra charge</span>.</p>

<span className="deepskyBlueText font16 makeFlex hrtlCenter latoBold">LOGIN NOW <span class="homeSprite blueArrowIcon appendLeft8"></span></span>
          
          </div>

       </div>

    );
  }
}

export default loginCard;
