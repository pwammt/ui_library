import React, { Component } from 'react';
import ActionBtn from './actionBtn';
class VerifyLoader extends Component {
  render() {
     return (

<div className="boxPadding  animated visible slideUpEffect  verifyLoader ">
<span onClick={()=>this.props.overlayFunction("")} className="homeSprite backIcon">&nbsp;</span>
 <p className="latoBlack font22 appendBottom10	">Verification</p>
 <p className=" width250px marginAuto appendBottom20 font16">Missed call recieved. Verification
in progress</p>

 <p className="verifyImgSection makeFlex perfectCenter"><a href="javascript:void(0)" className="sendOtpBtn primaryBtn latoBlack"><span className="btnLoader inlineB"> </span></a> </p>
 <p className="lightGreyText textCenter fixedBottom  ">Please dont press back refresh. You will be taken to the next screen automatically</p>
</div>



     );
  }
}

export default VerifyLoader;
