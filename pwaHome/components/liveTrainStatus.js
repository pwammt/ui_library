import React, { Component } from 'react';
import RailStatus from './railStatus';
import Disclaimer from './disclaimer';
import TrainStartingDate from './trainStartingDate';
import RailTimeOverlay from './railTimeOverlay';









class LiveTrainStatus extends Component {

  render() {
    return (

		<div className="makeFlex column">
      <div className="pnrHeader latoBold">

          <span className="homeSprite arrowBackIcon appendRight14">&nbsp;</span>
          <span className="font16  blackText">Live Train Status</span>
          <span className="pushRight deepskyBlueText font12 makeFlex hrtlCenter"> Refresh <span className="homeSprite refreshIcon appendLeft8"></span></span>
        
      </div>
      <div className="lastUpdated font12"> <span className="latoBold blackText">Last Updated:</span>  27 July 18 | 9:39 AM</div>
      <TrainStartingDate/>
      <RailStatus/>
      <Disclaimer/>
      <RailTimeOverlay/>
      
    </div>


    );
  }

}

export default LiveTrainStatus;
