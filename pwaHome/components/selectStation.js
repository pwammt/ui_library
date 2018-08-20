import React, { Component } from 'react';
import autoBind from 'react-autobind';
import SelectStationOverlay from './selectStationOverlay';


class SelectStation  extends Component {
	onChange(city,station, iata) {
	this.setState({city:city,station:station, iata:iata });
}
constructor(props){
	super(props);
	 autoBind(this);

	this.state = {city:'Station',
				  iata:'Select',
				  overlay:false,
				}
}
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
		<div className="selectStationWrap">
	<div onClick={this.overlayToggle}  className="widgetField makeFlex column appendBottom20">
		<label className="font12 appendBottom4 latoBold lightGreyText">{this.props.label}</label>
		<p className="city font16 latoBlack appendBottom4">{this.state.iata} - {this.state.city} </p>
		
		</div>
	

		{this.state.overlay &&
		<SelectStationOverlay onChange={this.onChange} overlayClose={this.overlayToggle}/>
		}
  </div>
);
}
}

export default SelectStation;
