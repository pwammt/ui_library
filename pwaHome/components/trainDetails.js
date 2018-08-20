import React, { Component } from 'react';
import RailSectionHeader from './railSectionHeader';






class trainDetails extends Component {

  render() {
    return (

		<div className="railSection bdrBottom1 appendBottom10">
      
      <RailSectionHeader iconClass={"pnrTrainIcon"} title={'Train Details'} subTitle={'12004 Lucknow Swarn Shatabdi'}/>
      <div className="makeFlex appendBottom10">
          <div className="trainTiming">
              <span className="blackText">06:10</span>
              <span className="greyText">5h 30m 480 Kms</span>
              <span className="blackText">12:30</span>
          </div>

          <div className="trainInfoRight">
              <div className="makeFlex column"> 
                  <p className="fromPoints font10 appendBottom4">BOARDING FROM</p>
                  <p className="blackText font16 latoBlack appendBottom4">New Delhi</p>
                  <p className="font12 appendBottom8"> <span className="blackText latoBlack">NDLS</span> New Delhi Railway station</p>
                  <p className="makeFlex hrtlCenter font12">
                    <span>27 July 28</span>
                    <span className="platformTag latoBlack appendLeft8">Platform #9</span>
                  </p>
              </div>

              <p className="seeCoach"> <span className="latoBlack">See Coach Positions </span> <span className="blueArrowIcon homeSprite"></span></p>


              <div className="makeFlex column"> 
                  <p className="uptoPoints font10 appendBottom4">RESERVATION UPTO</p>
                  <p className="blackText font16 latoBlack appendBottom4">Lucknow </p>
                  <p className="font12 appendBottom8"> <span className="blackText latoBlack">LKO</span> Lucknow Central</p>
                  <p className="makeFlex hrtlCenter font12">
                    <span>27 July 28</span>
                    <span className="platformTag latoBlack appendLeft8">Platform #2</span>
                  </p>
              </div>




          </div>
      </div>
      


    </div>


    );
  }

}

export default trainDetails;
