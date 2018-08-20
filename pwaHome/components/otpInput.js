import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import VerifiedPopup from './verifiedPopup';
import VerifyLoader from './verifyLoader';

import '../css/otpFlow.css';

class OtpInput extends Component {


	  constructor(props) {
	      super(props);
	      autoBind(this);
	      this.maxTime = 1.5;
	      this.timerState = '';
	      this.timerCount = '';
	      this.count = 0;
	      this.state = {
					overlay:false,
	          start:Date.now(),
	          diff:0,
	          minutes:0,
	          seconds:0,
	          duration : 60 * this.maxTime,
	          resend: false,
	      }

	  }
	  componentDidMount (){
	      window.clearInterval(this.timerCount);
	      this.timerCount = setInterval(()=>{
	          this.timer();
	      },1000)

	  }
	  componentWillUnmount() {
	      window.clearInterval(this.timerCount);
	  }
	  starttimer(){
	      window.clearInterval(this.timerCount);
	      this.timerCount = setInterval(()=>{
	          this.timer();
	      },1000)
	  }
	  resendOTP(evt) {
	      this.setState({start:Date.now(),minutes:0,seconds:0,duration: 60 * this.maxTime});
	      this.starttimer();
	      evt.preventDefault();
	  }
	  timer () {

	      let diff = this.state.diff;
	      let minutes = this.state.minutes;
	      let seconds = this.state.seconds;

	      diff = this.state.duration - (((Date.now() -  this.state.start) / 1000) | 0);
	      minutes = (diff / 60) | 0;
	      seconds = (diff % 60) | 0;
	      minutes = minutes < 10 ? "0" + minutes : minutes;
	      seconds = seconds < 10 ? "0" + seconds : seconds;
       if(diff!=0)
				this.setState({minutes:minutes,seconds:seconds});

	      if (diff == 0) {
	          this.setState({resend:true});
	          window.clearInterval(this.timerCount);
	      }
	  }
		handleKeyUp(event)
		{

       if (event.keyCode != 8 && event.target.value>=0 && event.target.value<=9)
					{
				 			event.target.nextSibling && event.target.nextSibling.focus();
			    }

	   }

		handleKeyDown(event)
		{
					if(event.keyCode === 8 && event.target.value.length==0)
					{
						event.target.previousSibling && event.target.previousSibling.focus();
					}
		}


		overlayToggle(overlayName){
			this.setState({overlay:overlayName});
		}

	   render() {
	      return (


<div className="textCenter boxPadding otpStep2 ">
			 <p className="latoBold font22 appendBottom10	">Enter OTP</p>
				<p className=" width250px marginAuto appendBottom24">OTP has been sent to your mobile number please enter the code below</p>
				<p className="appendBottom24 newUserInput">
						<input pattern="[0-9\/]*" type="tel" placeholder="" maxLength="1"  onKeyDown={this.handleKeyDown} onKeyUp={this.handleKeyUp} />
						<input pattern="[0-9\/]*" type="tel"  placeholder="" maxLength="1"  onKeyDown={this.handleKeyDown}  onKeyUp={this.handleKeyUp} />
						<input pattern="[0-9\/]*" type="tel"  placeholder="" maxLength="1"  onKeyDown={this.handleKeyDown}  onKeyUp={this.handleKeyUp} />
						<input pattern="[0-9\/]*" type="tel"  placeholder="" maxLength="1"  onKeyDown={this.handleKeyDown}  onKeyUp={this.handleKeyUp} />
				</p>
	
				<p className="appendBottom20 font12">
					<span className="otp-timer latoBold">
						{this.state.minutes} : {this.state.seconds}
					</span>
				</p>

				<p className="appendBottom20">
					<a href="javascript:void(0);"onClick={()=>this.overlayToggle("VerifiedPopup")} className="primaryBtn verifyBtn latoBlack">VERIFY</a>
				</p>
				<p className="makeFlex fixedBottom latoBold">
					<a href="javascript:void(0);" className="pushLeft" onClick={this.resendOTP}>Resend OTP</a>
					<a onClick={()=>this.overlayToggle("VerifyLoader")} href="javascript:void(0);" className="pushRight vrfy-call"  >Verify by Missed call</a>

				</p>

{this.state.overlay=="VerifiedPopup" && <VerifiedPopup verifyImg={"ic-verified-number-wallet.png"} msg={"Verification Successful"} msgInfo={"Congrats! You have successfully unlocked a bonus reward of Rs 500 wallet money"} overlayFunction={this.overlayToggle}/>}
{this.state.overlay=="VerifyLoader" && <VerifyLoader overlayFunction={this.overlayToggle}	/>}


			</div>













	      );
	   }
	}

export default OtpInput;
