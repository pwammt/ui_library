import React, { Component } from 'react';


class LowestFlightFaresTile extends Component {
  render() {

	    return (
	<li className="makeFlex hrtlCenter appendBottom16">
			<div className="makeFlex column hrtlCenter imgRatingWrap appendRight8">
  			<img src={this.props.src} alt="flight"/>

			</div>
			<div className="calc140 appendLeft8 font12">
			<p className="latoBold appendBottom4 truncate">{this.props.time}</p>

			<p className="lightGreyText">{this.props.date}</p>
			</div>

			<div className="priceWrap pushRight">
			<p className="font18 latoBold"><span>&#8377;</span> {this.props.price}</p>

			</div>

	</li>

    );
  }
}

export default LowestFlightFaresTile;
