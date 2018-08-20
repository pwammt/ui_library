import React, { Component } from 'react';
import autoBind from 'react-autobind';
import SelectGuestsRoomsOverlay from './selectGuestsRoomsOverlay';
import '../css/guestsRooms.css';


class SelectGuestsRooms extends Component {
		
	constructor(props){
		super(props);
		 autoBind(this);
		this.state = {overlay:false, room:1};		
	
	}
	
	overlayToggle(){
		this.setState({overlay:!this.state.overlay});
		if(!this.state.overlay){
			document.body.style.overflow = "hidden";
		}
			else{
				document.body.style.overflow = "visible";
			}
  		}
	setRoomCount(room){
		this.setState({room:room});
	}
	
	
  render() {
	  
	    return (
			<div>
			<div onClick={this.overlayToggle} className="widgetField noBdr appendBottom24">
			<label className="font12 appendBottom4 lightGreyText">GUESTS & ROOMS</label>
			<p className="font14 latoBlack appendBottom4 makeFlex">
			<span>2 <span className="homeSprite adultIcon appendRight8"></span></span>
			<span>0 <span className="homeSprite childIcon appendRight8"></span></span>
			<span>{this.state.room} Rooms </span></p>
			</div>
			
			
			
			{this.state.overlay &&
			<SelectGuestsRoomsOverlay room={this.state.room} setRoomCount={this.setRoomCount}  overlayClose={this.overlayToggle}/>
			}
			
	</div>
      
    );
  }
}

export default SelectGuestsRooms;
