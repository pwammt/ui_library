import React, { Component } from 'react';

class TrendingTile extends Component {
  render() {
	  
	    return (
	<li className="makeFlex column appendBottom16">
  			<img src={this.props.src} alt="trendingDestinationsImg"/>
			<p className="font18 whiteText latoBlack offersTitle">{this.props.title}</p>
			<p className="font16 latoBlack appendBottom8">{this.props.views} <span className="latoBold lightGreyText">views</span></p>
			<p className={"latoBold appendBottom10 " + this.props.color } >{this.props.description}</p>
	</li>
      
    );
  }
}

export default TrendingTile;
