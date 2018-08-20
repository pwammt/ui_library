import React, { Component } from 'react';
import Rooms from './rooms';
import NumericInput from 'react-numeric-input';
import autoBind from 'react-autobind';
class SelectGuestsRoomsOverlay extends Component {
	
  constructor(props){
		super(props);
		 autoBind(this);
	}
	
	
  render() {
	  
	  
	    return (
			
			
			<div className="guestsRoomsWrap animated visible slideUpEffect">
			
			
			
		<div className="guestsRoomsHeader fixed paddingLR20">
			<span onClick={this.props.overlayClose} className="backIcon homeSprite">&nbsp;</span>
				<span className="title font16 highlighted latoBlack">Guests & Rooms</span>
			</div>			
								
				<Rooms room={this.props.room} setRoomCount={this.props.setRoomCount}/>
				
		<span onClick={this.props.overlayClose} className="doneBtn font14 latoBlack">Done</span>
			
			
			</div>				
			
	
      
    );
  }
}

export default SelectGuestsRoomsOverlay;
