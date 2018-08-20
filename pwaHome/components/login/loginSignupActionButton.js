import React, { Component } from 'react';

class LoginSignupActionButton  extends Component {



  render() {

	    return (

			<a  href="javascript:void(0)" className="blueButton font16 makeFlex perfectCenter latoBlack whiteText"> {this.props.title}</a>
			

    );
  }
}

export default LoginSignupActionButton;
