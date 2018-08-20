import React, { Component } from 'react';
import autoBind from 'react-autobind';
import SelectRailStartDateOverlay from './selectRailStartDateOverlay';


class SelectStation  extends Component {
	
constructor(props){
	super(props);
	 autoBind(this);

	this.state = {day:'Select',
				  date:'date',
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
	  onChange(day,date) {
		this.setState({day:day,date:date });
	}

render() {

	return (
		<div className="selectStationWrap">
		<div onClick={this.overlayToggle}  className="widgetField makeFlex column appendBottom20">
		<label className="font12 appendBottom4 latoBold lightGreyText">{this.props.label}</label>
		<p className="city font16 latoBlack appendBottom4"> {this.state.day} - {this.state.date}</p>
		
		</div>
	

		{this.state.overlay &&
		<SelectRailStartDateOverlay onChange={this.onChange} overlayClose={this.overlayToggle}/>
		}
  </div>
);
}
}

export default SelectStation;
