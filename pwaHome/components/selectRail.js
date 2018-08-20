import React, { Component } from 'react';
import autoBind from 'react-autobind';
import SelectRailOverlay from './selectRailOverlay';


class SelectRail  extends Component {

		onChange(railName, railNo) {
		this.setState({railName:railName, railNo:railNo});
	}
	constructor(props){
		super(props);
		 autoBind(this);

		this.state = {railName:'Name',
					  railNo:'Enter Train Number',
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
					<p className="city font16 latoBlack appendBottom4 truncate">{this.state.railNo} - {this.state.railName} </p>
					
				</div>
		

			{this.state.overlay &&
			<SelectRailOverlay railNmae={this.onChange} overlayClose={this.overlayToggle}/>
			}
      </div>
    );
  }
}

export default SelectRail;
