import React, { Component } from 'react';
import autoBind from 'react-autobind';
import RailTimeInfo from './railTimeInfo'
 
class RailTimeOverlay extends Component {
 
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
 
        <div className="railTimeInfo">

          <div className="railTimeHeader" onClick={()=>this.OverlayToggle("railTimeInfo")} >
              <span className="timeIcon homeSprite appendRight8"></span>
              <span className="makeFlex flexOne font12 redText appendRight8">Train has crossed station Panki at 02:26. Will reach Kanpur in 56 mins</span>
              <span className="homeSprite redArrowIcon"></span>
          </div>

          {this.state.Overlay =="railTimeInfo" &&
            <div className="overlayAnimation">
            <RailTimeInfo cross={()=>this.OverlayToggle("")}/>
            <div className="backdrop" onClick={()=>this.OverlayToggle("")}></div>
            </div>
          }
        
        </div>
 
      );
    }
  }
 
  export default RailTimeOverlay;