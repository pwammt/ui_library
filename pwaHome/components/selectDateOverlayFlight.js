import React, { Component } from 'react';
import DayPicker from './dayPickerFlight';
import autoBind from 'react-autobind';

import NumericInput from 'react-numeric-input';
class SelectDateOverlay  extends Component {


		constructor(props){
		super(props);
		 autoBind(this);
	}

  render() {

	    return (

		<div className="dayPickerWrap animated visible slideUpEffect">
<span onClick={this.props.overlayClose} className="homeSprite backIcon">&nbsp;</span>

			<DayPicker updateFromDate={this.props.updateFromDate} updateToDate={this.props.updateToDate}/>
<span onClick={this.props.overlayClose} className="doneBtn font14">Done</span>
			</div>



    );
  }
}

export default SelectDateOverlay;
