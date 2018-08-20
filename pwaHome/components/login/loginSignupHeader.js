import React, { Component } from 'react';


class LoginSignupHeader extends Component {
	
  render() {
    return (
		
		<div className="boxPadding makeFlex column hrtlCenter">
 <p className="font22 latoBlack blackText appendBottom10">{this.props.heading}</p>
 <p className="font16 lightGreyText textCenter makeFlex column lineheight"><span className="appendBottom4">{this.props.subHeading}</span> <span> {this.props.subHeading1}</span> </p>
</div>

	
		
    );
  }
	
}

export default LoginSignupHeader;
