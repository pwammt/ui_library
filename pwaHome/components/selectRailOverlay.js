import React, { Component } from 'react';
import RailAutoSuggest from './railAutoSuggest';
import autoBind from 'react-autobind';
class SelectRailOverlay  extends Component {

	onChange(newValue) {
		this.setState({value:newValue});
	}

		constructor(props){
		super(props);
		 autoBind(this);

		this.state = {value:'Enter Train Name/Number'  }
	}

  render() {

	    return (

			<div className="cityWrap animated visible slideUpEffect">
					<span onClick={this.props.overlayClose} className="homeSprite backIcon">&nbsp;</span>
			 		<RailAutoSuggest placeholder="Enter Train Name/Number" onChange={this.props.railNmae} overlayClose={this.props.overlayClose}  />					
			</div>

    );
  }
}

export default SelectRailOverlay;
