import React, { Component } from 'react';
import RailSectionHeader from './railSectionHeader';
import RailTrack from './railTrack';







class RailStatus extends Component {

  render() {
    return (

		<div className="railSection bdrBottom1 appendBottom10">
       <RailSectionHeader iconClass={"liveTrainIcon"} title={'12004'} subTitle={'12004 Lucknow Swarn Shatabdi'}/>
       <RailTrack/> 
      


    </div>


    );
  }

}

export default RailStatus;
