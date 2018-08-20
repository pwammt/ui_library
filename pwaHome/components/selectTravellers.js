import React, { Component } from 'react';
import autoBind from 'react-autobind';
import SelectTravellersOverlay from './selectTravellersOverlay';


class SelectTravellers extends Component {

	constructor(props){
		super(props);
		 autoBind(this);
		this.state = {overlay:false}

	}

	overlayToggle(){
		this.setState({overlay:!this.state.overlay});
		if(!this.state.overlay){
			document.body.style.overflow = "hidden";
		}
			else{
				document.body.style.overflow = "visible";
			}
  		}



  render() {

	    return (
			<div className="appendBottom20">
			<div onClick={this.overlayToggle} className="widgetField noBdr appendBottom24">
			<label className="font12 appendBottom4 lightGreyText">{this.props.label}</label>
			<p className="font14 latoBlack appendBottom4 makeFlex ">
			<span className="makeFlex">2 <span className="homeSprite adultIcon appendLeft4 appendRight8"></span></span>
			<span className="makeFlex">0 <span className="homeSprite childIcon appendLeft4 appendRight8"></span></span>
			<span className="makeFlex">0 <span className="homeSprite infantsIcon appendLeft4 appendRight8"></span></span>
			<span className="travelClassText"> Economy  </span></p>
			</div>


			{this.state.overlay &&
			<SelectTravellersOverlay  overlayClose={this.overlayToggle}/>
			}

	</div>

    );
  }
}

export default SelectTravellers;
