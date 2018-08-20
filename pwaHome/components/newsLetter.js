import React, { Component } from 'react';
import '../css/newsLetter.css';




class NewsLetter extends Component {
		
  render() {
    return (
		
		<div className="boxPadding makeFlex column">
 <div className="sectionHeading appendBottom4"><h2>{this.props.heading}</h2></div>
 <p className="appendBottom24">{this.props.subHeading}</p>

 <form className="newsletterForm makeFlex column">
		
		<input  type="email"  aria-label='enter e-mail' placeholder="enter e-mail" className="makeFlex appendBottom16"/>
		
		<a className="latoBlack" href="javascript:void(0)">SUBMIT</a>
		
		</form>

    
  </div>
	
		
    );
  }
	
}

export default NewsLetter;
