import React, { Component } from 'react';
import ActionBtn from './actionBtn';
class VerifiedPopup extends Component {
  render() {

	    return (
        <div className="boxPadding verifiedPopup animated visible slideUpEffect ">
  			<div className=" textCenter">
  					 <p className="latoBlack font22 appendBottom4">{this.props.msg}</p>
  					 <span className="iconCross homeSprite pushRight"  onClick={()=>this.props.overlayFunction("")}> </span>
  					 </div>

  					 <p className="width280px textCenter font16 darkGreyText marginAuto"> {this.props.msgInfo}</p>
  <p className="verifyImgSection makeFlex perfectCenter"> <img className="verificationImg"  src={"../images/"+this.props.verifyImg}/> </p>
  		<ActionBtn title={"START BOOKING"}/>
  			</div>

    );
  }
}

export default VerifiedPopup;
