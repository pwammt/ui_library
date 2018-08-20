import React, { Component } from 'react';

 
class RailTimeOverlay extends Component {
 
    render() {
        return (

          <div className="railTimeInfoOverlay">

              <div className="railTimeHeader" onClick={this.props.cross} >
                          <span className="homeSprite timeIcon appendRight8"></span>
                          <span className="makeFlex flexOne font12 redText appendRight8">Train has crossed station Panki at 02:26. Will reach Kanpur in 56 mins</span>
                          <span className="homeSprite redArrowDownIcon"></span>
              </div>

              <div className="boxPadding makeFlex column">
              
                    <div className="makeFlex hrtlCenter appendBottom16"> 
                        <div className="makeFlex column font12">
                            <p className=" appendBottom4"><span className="latoBlack">12004</span> Lucknow Swarn Shatabadi</p>
                            <p><span className="latoBlack">Last Updated</span>:  1 mins ago</p>
                        </div>
                        <span className="pushRight deepskyBlueText font12 makeFlex hrtlCenter"> Refresh <span className="homeSprite refreshIcon appendLeft8"></span></span>
                    </div>


                    <div className="startOnCard font12">
                        <p className="makeFlex hrtlCenter padding8"><span>Started On</span> <span className="latoBlack pushRight">30 Jul 18 | 21:20 </span></p>
                        <div className="junctionBox appendBottom16">
                              <p className="makeFlex appendBottom4 "><span>New Delhi</span> <span className="pushRight">Allahabad Junction</span></p>
                              <p className="makeFlex appendBottom4 "><span>0 km</span> <span className="pushRight">642 km</span></p>
                              <p className="distanceLiner"> <span className="distanceFiller"></span> </p>
                        </div>

                        <div className="makeFlex font12 bdrBottom1 padding8 appendBottom12">
                              <span className="stopName">Next Stop</span>

                              <div className="makeFlex flexOne column flexEnd">
                              <p className="blackText latoBold end appendBottom8">Kanpur Central (CNB)</p>
                              <p className="makeFlex arounsSpace hrtlCenter appendBottom8"><span className="appendRight8">31 July 18</span> <span className="platFormTag latoBold blackText">Platform #9</span></p>
                              <p className="appendBottom8">Distance Left: 99 km</p>
                              <p className="makeFlex arounsSpace hrtlCenter appendBottom12"><span className="appendRight8 greenText latoBlack">Est. ARR. - 03:37 </span> <span>Sch - 03:37  </span></p>
                              </div>
                        </div>

                        <div className="makeFlex font12  padding8">
                              <span className="stopName">Next Stop</span>
                              <div className="makeFlex flexOne column flexEnd">
                              <p className="blackText latoBold end appendBottom8">Kanpur Central (CNB)</p>
                              <p className="makeFlex arounsSpace hrtlCenter appendBottom8"><span className="appendRight8">31 July 18</span> <span className="platFormTag latoBold blackText">Platform #9</span></p>
                              <p className="appendBottom8">Distance Left: 99 km</p>
                              <p className="makeFlex arounsSpace hrtlCenter appendBottom12"><span className="appendRight8 greenText latoBlack">Est. ARR. - 03:37 </span> <span>Sch - 03:37  </span></p>
                              </div>
                        </div>
                    </div> 
                </div>
            </div>
 
      );
    }
  }
 
  export default RailTimeOverlay;