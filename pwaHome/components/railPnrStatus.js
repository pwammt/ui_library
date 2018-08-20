import React, { Component } from 'react';
import PnrInfo from './pnrInfo';
import RailSeatStatus from './railSeatStatus';
import TrainDetails from './trainDetails';
import Disclaimer from './disclaimer';
import RailPnrError from './railPnrError';








class railPnrStatus extends Component {


 

  render() {
    return (

		<div className="makeFlex column">
      <div className="pnrHeader latoBold">

          <span className="homeSprite arrowBackIcon appendRight14">&nbsp;</span>
          <span className="font16  blackText">PNR Status</span>
          <span className="pushRight deepskyBlueText font12 makeFlex hrtlCenter"> Refresh <span className="homeSprite refreshIcon appendLeft8"></span></span>
        
      </div>
      <div className="lastUpdated font12"> <span className="latoBold blackText">Last Updated:</span>  27 July 18 | 9:39 AM</div>
      <PnrInfo/>
      <RailSeatStatus/>
      <TrainDetails/>
      <Disclaimer/>
      <RailPnrError pnrNo={'PNR 223456787'}/>
      


    </div>


    );
  }

}

export default railPnrStatus;
