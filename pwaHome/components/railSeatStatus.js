import React, { Component } from 'react';
import autoBind from 'react-autobind';
import RailSectionHeader from './railSectionHeader';
import WhatsThisOverlay from './whatsThisOverlay'






class railSeatStatus extends Component {

  constructor(props) {
    super(props)
    autoBind(this);		 
	
    this.state = {
     Overlay:""
    }
  }

  OverlayToggle(overlayName){
    let cssValue;
    this.setState({Overlay:overlayName}, function(){
		if(this.state.Overlay != ""){
		  cssValue = "bodyFixed";
		 
		}
		else{
		   cssValue = "";
		  
		}
		document.body.className = cssValue;
  });
}

  render() {
    return (

		<div className="railSection bdrBottom1 appendBottom10">
      <RailSectionHeader iconClass={"seatIcon"} title={'Seat Status'} subTitle={'4 Passengers'}/>

      <div className="seatTable font12 appendBottom20">
        <p className="heading makeFlex padding8 bdrBottom1">
        <span className="flexOne"> Booking Status</span>
        <span className="flexOne"> Current Status</span>
        <span className="flexOne textRight"> Confirmation</span>
        </p>

        <p className="makeFlex padding8 paddingTB12 bdrBottom1">
        <span className="flexOne"> GNWL/10</span>
        <span className="flexOne blackText latoBlack">CNF/C10/63/ LB/GN</span>
        <span className="flexOne textRight blackText"> <span className="homeSprite confirmedIcon"></span> Confirmed</span>
        </p>

        <p className="makeFlex padding8 paddingTB12 bdrBottom1">
        <span className="flexOne"> GNWL/13</span>
        <span className="flexOne blackText latoBlack">CNF/C10/65/ SL/SS</span>
        <span className="flexOne textRight blackText"> <span className="homeSprite confirmedIcon"></span> Confirmed</span>
        </p>


        <p className="makeFlex padding8 paddingTB12 bdrBottom1">
        <span className="flexOne"> WL/123</span>
        <span className="flexOne blackText latoBlack">WL 56 TQK</span>
        <span className="flexOne makeFlex column textRight blackText"> 
        
       <span className="appendBottom4"> <span className="perTag latoBlack">87% </span>  Chance</span>
        <span onClick={()=>this.OverlayToggle("whatsThisOverlay")} className="deepskyBlueText latoBlack"> What's this?</span>
        </span>
        </p>

         <p className="makeFlex padding8 paddingTB12 bdrBottom1">
        <span className="flexOne"> WL/25 </span>
        <span className="flexOne blackText latoBlack">RAC</span>
        <span className="flexOne textRight blackText"> Chart Not Prepared</span>
        </p>


      </div>

      <div className="pnrDetailsCard appendBottom10">
          <p className="padding8 paddingTB12 bdrBottom1 makeFlex"> 
          <span className="left">Total Fare</span>
          <span className="flexOne textRight blackText latoBlack"> ₹ 1440</span>
          </p>
      </div>

      
      {this.state.Overlay =="whatsThisOverlay" &&
		  <div className="overlayAnimation">
           <WhatsThisOverlay cross={()=>this.OverlayToggle("")}/>
		  <div className="backdrop" onClick={()=>this.OverlayToggle("")}></div>
		  </div>
          }


    </div>


    );
  }

}

export default railSeatStatus;
