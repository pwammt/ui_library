import React, { Component } from 'react';
import AddAdults from './addAdults';
import AddChildren from './addChildren';
import AddInfants from './addInfants';
import SelectTravellerClass from './selectTravellerClass';
import NumericInput from 'react-numeric-input';
import autoBind from 'react-autobind';


class SelectTravellersOverlay extends Component {

  constructor(props){
		super(props);
		 autoBind(this);
	}


  render() {


	    return (


			<div className="travellerClassWrap animated visible slideUpEffect">

		<div className="guestsRoomsHeader fixed paddingLR20">
			<span onClick={this.props.overlayClose} className="backIcon homeSprite">&nbsp;</span>
				<span className="title font16 highlighted latoBlack">Travellers & Class</span>
			</div>
			<div className="overlayMid paddingLR20">
			   	<AddAdults/>
					<AddChildren/>
					<AddInfants/>
			<SelectTravellerClass/>
			</div>

				<span  onClick={this.props.overlayClose} className="doneBtn font14">Done</span>


			</div>



    );
  }
}

export default SelectTravellersOverlay;
