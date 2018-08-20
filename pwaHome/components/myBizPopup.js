import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../css/myBizPopup.css';



class MyBizPopup  extends Component {


componentDidUpdate()
{

  document.body.style.overflow = "hidden";
}
  render() {

	    return (
		<div className="myBizPopupContainer">
      <div className="outsideLayer" onClick={this.props.hidePopup}>

      </div>
        <div className="myBizPopup boxPadding">
            <p className="appendBottom12"> <span className="iconMyBiz homeSprite"> </span> </p>

            <p className="appendBottom12 heading latoBlack"> myBiz is currently unavailable on mobile-web </p>

            <p className="appendBottom12"> It seems you are trying to login with your myBiz account <span className="latoBold">loremIpsum@go-mmt.com</span>.</p>

            <p className="appendBottom52">To continue using your myBiz services download our free <span className="latoBold">iOS</span> or <span className="latoBold">Android app</span>.
            We will inform you once it''s live on mobile-web platform. </p>

            <div className="makeFlex font16 btnSection">
                    <a className="pushLeft dismissBtn" onClick={this.props.hidePopup}> DISMISS</a>
                    <a className="pushRight secondaryBtn downloadBtn latoBlack">DOWNLOAD APP</a>
            </div>

        </div>


    </div>

    );
  }
}

export default MyBizPopup;
