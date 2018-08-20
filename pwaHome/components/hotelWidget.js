import React, { Component } from 'react';
import SelectCity from './selectCity';
import SelectDate from './selectDate';
import SelectGuestsRooms from './selectGuestsRooms';
import ActionBtn from './actionBtn';

import autoBind from 'react-autobind';
import '../css/widget.css';

class HotelWidget extends Component {

	constructor(props){
		super(props);
		 autoBind(this);

	}


	//Overlay function
	overlayToggle(){
			let cssValue;
		this.setState({overlay:!this.state.overlay});
		if(!this.state.overlay){
			cssValue="bodyFixed"
		}
			else{
				cssValue="bodyStatic"
			}
			document.body.className=cssValue
  		}




  render() {


	    return (

		//Widget Wrapper
		<div className="widgetWrap makeFlex column boxPadding">

	 <form>
	 	<h1> Best Hotel Booking Experience</h1>

			<SelectCity label={"Destination"}/>
			<SelectDate label={"Select Dates"}/>
			<SelectGuestsRooms/>
			<ActionBtn title={"Search Hotels"}/>


      </form>
      </div>
    );
  }
}

export default HotelWidget;
