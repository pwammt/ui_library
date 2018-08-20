import React, { Component } from 'react';
import autoBind from 'react-autobind';
import AutoSuggest from './autoSuggest';
import SelectCityOverlay from './selectCityOverlay';
class SelectCity  extends Component {

		onChange(city, country) {
		this.setState({city:city, country:country});
	}
	constructor(props){
		super(props);
		 autoBind(this);

		this.state = {city:'Select City',
					  country:'',
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
			<div>
		<div onClick={this.overlayToggle}  className="widgetField makeFlex column appendBottom20">
			<label className="font12 appendBottom4 latoBold lightGreyText">{this.props.label}</label>
			<p className="city font16 latoBlack appendBottom4"> {this.state.city}</p>
			<p className="airport font11 grey appendBottom4">{this.state.country}</p>
			</div>
		

			{this.state.overlay &&
			<SelectCityOverlay cityName={this.onChange} overlayClose={this.overlayToggle}/>
			}
      </div>
    );
  }
}

export default SelectCity;
