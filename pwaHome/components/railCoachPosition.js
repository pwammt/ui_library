import React, { Component } from 'react';
import autoBind from 'react-autobind';








class railCoachPosition extends Component {

  constructor(props){
    super(props);
    autoBind(this);
     this.state={note:true}
 }

 hideNote()
 {
   console.log("Done");
    this.setState({note:false})

 }

 

  render() {
    return (

		<div className="makeFlex column">

        <div className="pnrHeader latoBold">
              <span className="homeSprite arrowBackIcon appendRight14">&nbsp;</span>
              <span className="font16  blackText">Coach Positions</span>
       </div>
       <div className="lastUpdated font12"> <span className="latoBold blackText">Last Updated:</span>  27 July 18 | 9:39 AM</div>
     

      {this.state.note && 
        <div className="coachNote font12 ">
            <span> <span className="latoBlack">NOTE:</span> Coach positions may vary for certain trains. Remember to re-check at station.</span>
            <span onClick={this.hideNote} className="closeNote"> &nbsp;</span> 
        </div>
      }

       <ul className="coachWrap">
         
          <li className="font16 latoBlack appendBottom4">
            <span className="countLeft"></span>
            <span className="homeSprite engineImg"></span>
            <span className="coachName makeFlex flexOne paddingLR16">Engine</span>

          </li>

          <li className="font16 latoBlack appendBottom20">
            <span className="countLeft"> 1 </span>
            <span className="coachBox"> L </span>
            <span className="coachName  makeFlex flexOne paddingLR16">Luggage</span>

          </li>

           <li className="font16 latoBlack appendBottom20">
            <span className="countLeft"> 2 </span>
            <span className="coachBox"> SLR </span>
            <span className="coachName  makeFlex flexOne paddingLR16">Sitting & Luggage</span>

          </li>

          <li className="font16 latoBlack appendBottom20">
            <span className="countLeft"> 3 </span>
            <span className="coachBox"> HCP </span>
            <span className="coachName  makeFlex flexOne paddingLR16">First Class AC</span>

          </li>

          <li className="font16 latoBlack appendBottom20">
            <span className="countLeft"> 4 </span>
            <span className="coachBox"> GEN </span>
            <span className="coachName  makeFlex flexOne paddingLR16">General Unreserved</span>

          </li>

          <li className="font16 latoBlack appendBottom20 booked">
            <span className="countLeft"> 5 </span>
            <span className="coachBox"> AB1 </span>
            <span className="coachName  makeFlex column flexOne paddingLR16">
                <span>Second & Third AC</span>
                <span className="latoRegular lightGreyText">2 Seats in this coach</span>
                <span>21, 24</span>
            </span>

          </li>

          <li className="font16 latoBlack appendBottom20">
            <span className="countLeft"> 6 </span>
            <span className="coachBox"> GEN </span>
            <span className="coachName  makeFlex flexOne paddingLR16">General</span>

          </li>
         
       </ul>

    </div>


    );
  }

}

export default railCoachPosition;
