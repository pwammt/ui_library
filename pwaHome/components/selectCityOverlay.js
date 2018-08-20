import React, { Component } from 'react';
import AutoSuggest from './autoSuggest';
import autoBind from 'react-autobind';
class SelectCityOverlay  extends Component {

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

			<span onClick={this.props.overlayClose} className="homeSprite backIcon">&nbsp;</span>
			 <AutoSuggest
          placeholder="Select Your Destination city"
          onChange={this.props.cityName} overlayClose={this.props.overlayClose}  />
{/*city error popup changes*/}
					<div className="cityErrorPopup latoBold">
								<img className="appendBottom40" width="208px" height="130px" src="../images/missingCityError.png"/>
								<p className="font20 appendBottom10"> No City or Airport Found</p>
								<p><a  href="javascript:void(0)"> Report Missing City/Airport </a></p>
					</div>
					<span className="clearInput latoBold">CLEAR</span>
{/*/city error popup changes*/}					
			</div>

    );
  }
}

export default SelectCityOverlay;
