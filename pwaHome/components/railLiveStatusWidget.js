import React, { Component } from 'react';
import ActionBtn from './actionBtn';
import autoBind from 'react-autobind';
import SelectRail from './selectRail';
import SelectStation from './selectStation';
import SelectRailStartDate from './selectRailStartDate';
import '../css/widget.css';
import '../css/rail.css';

class RailPnrWidget extends Component {

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

			<div>
				<form>
					<SelectRail label={"TRAIN NAME/ NUMBER"}/>
					<SelectStation label={"SELECT YOUR STATION (OPTIONAL)"}/>
					<SelectRailStartDate label={"TRAIN START DATE"}/>
					<ActionBtn title={"Search TRAINS"}/>
				</form>
			</div>
    );
  }
}

export default RailPnrWidget;
