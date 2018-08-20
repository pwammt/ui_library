import React, { Component } from 'react';
import '../css/support.css';




class Support extends Component {
		
  render() {
    return (
		
		<div className="paddingLR16 paddingT8 makeFlex supportWrap hrtlCenter font12 ">
 <div className="makeFlex supportLeft hrtlCenter">
		<span className="homeSprite supportIcon">&nbsp;</span>
		<span className="latoBlack paddingL16">24x7 
Support</span>
		</div>
		<div className="pushRight textRight flexOne">
		<p className="appendBottom4"><a className="blackText" hreff="mailto:support@makemytrip.com">support@makemytrip.com</a></p>
		<p>1800-78-9999</p>
		
		</div>
  </div>
	
		
    );
  }
	
}

export default Support;
