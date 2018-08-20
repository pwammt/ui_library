import React, { Component } from 'react';

class RecentSearchesTile extends Component {
  render() {
	  
	    return (
	<li className={"makeFlex appendBottom16 hrtlCenter " + this.props.recentClass}>
  			<span className={"homeSprite appendRight8 " + this.props.recentSearchIcon } ></span>
			<div className="recentSearchInfo pushRight makeFlex hrtlCenter font12">
			<span className="font10 lightGreyText recentSearchDate">
			<span >{this.props.dateStart}</span>  <span>  {this.props.dateend}</span>
			</span>
			<span className="pnrNo latoBlack">{this.props.pnr}</span>
		
			<span className="latoBlack recentSearchCity"><span>{this.props.fromCity}</span>  <span> {this.props.toCity}</span>
			<span>{this.props.hotelName}</span></span>			
			<span className="homeSprite blueArrowIcon pushRight">&nbsp;</span>
			</div>
			
		
	</li>
      
    );
  }
}

export default RecentSearchesTile;
