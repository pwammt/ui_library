import React, { Component } from 'react';
import StationAutoSuggest from './stationAutoSuggest';
import autoBind from 'react-autobind';
class SelectStationOverlay  extends Component {

	onChange(newValue) {
		this.setState({value:newValue});
	}

		constructor(props){
		super(props);
		 autoBind(this);

		this.state = {value:'Select City'  }
	}

  render() {

	    return (

			<div className="cityWrap animated visible slideUpEffect">

					<div className="railOverlayHeader">
				<p className="makeFlex hrtlCenter padding16 bdrBottom1">
				<span onClick={this.props.overlayClose} className="homeSprite backIcon">&nbsp;</span>
				<span className="latoBold font16 blackText"> Select a Station </span>
				</p>
				<p className="font12 paddingLR16 paddingTB12"> <span className="latoBold">12004</span> Lucknow Swarn Shatabadi</p>
				</div>


			 <StationAutoSuggest
          placeholder="Select Your Destination city"
          onChange={this.props.onChange} overlayClose={this.props.overlayClose}  />
				
		</div>

    );
  }
}

export default SelectStationOverlay;
