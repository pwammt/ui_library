import React, { Component } from 'react';
import autoBind from 'react-autobind';
import SelectDateOverlay from './selectDateOverlayFlight';
class SelectDate  extends Component {


	constructor(props){
		super(props);
		 autoBind(this);var today = new Date();
	    var tomorrow = new Date(today.getTime() + (1000 * 60 * 60 * 24));
		this.state = {overlay:false,
					  from: today, to:tomorrow };

	}

		//Calendar From Date
	updateFromDate(from) {
		this.setState({from:from});

	}

	//Calendar To Date
	updateToDate(to) {
		this.setState({to:to});

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
	  const {from, to} = this.state;
	const options = { month: "short", day: "numeric" };

	    return (
			<div>

			<div onClick={this.overlayToggle} className=" widgetField makeFlex column appendBottom20">
			<label className="font12 appendBottom4 latoBold lightGreyText">{this.props.label}</label>
			<p className="font14 latoBlack appendBottom4 makeFlex flexWrap"><span> {`${from.toLocaleDateString('en-GB', options)}`}</span></p>
			</div>

			{this.state.overlay &&
			<SelectDateOverlay updateFromDate={this.updateFromDate} updateToDate={this.updateToDate}  overlayClose={this.overlayToggle}/>
			}
      </div>
    );
  }
}

export default SelectDate;
