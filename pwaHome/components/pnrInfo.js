import React, { Component } from 'react';
import RailSectionHeader from './railSectionHeader';






class pnrInfo extends Component {

  render() {
    return (

		<div className="railSection bdrBottom1 appendBottom10">
       <RailSectionHeader iconClass={"pnrIcon"} title={'PNR 223456787'} subTitle={'12004 Lucknow Swarn Shatabdi'}/>
       <div className="pnrDetailsCard appendBottom10">
          <p className="padding8 paddingTB12 bdrBottom1 makeFlex"> 
          <span className="left">Train</span>
          <span className="flexOne textRight blackText">12004 Lucknow  Swarn Shatabdi</span>
          </p>
          <p className="padding8 paddingTB12 bdrBottom1 makeFlex"> 
          <span className="left">Journey Date</span>
          <span className="flexOne textRight blackText latoBlack"><span>27 Jul 18</span> | <span>6:10 AM</span></span>
          </p>
          <p className="padding8 paddingTB12 makeFlex bdrBottom1"> 
          <span className="left">Current Status</span>
          <span className="flexOne textRight blackText latoBlack">2 Confirmed
1 Waiting List
1 RAC</span>
          </p>

          <p className="padding8 paddingTB12 makeFlex spaceBetween"> 
          <span className="left">Chart Prepared</span>
          <span className="blackText latoBlack makeFlex hrtlCenter"> <span className="homeSprite chartNoIcon appendRight4">&nbsp;</span> No</span>
          <span className="blackText latoBlack makeFlex hrtlCenter"> <span className="homeSprite chartYesIcon appendRight4">&nbsp;</span> Yes</span>
        
          </p>
       
       </div>
      


    </div>


    );
  }

}

export default pnrInfo;
