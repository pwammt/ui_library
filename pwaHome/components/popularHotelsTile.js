import React, { Component } from 'react';


class PopularHotelsTile extends Component {
  render() {
	  
	    return (
	<li className="makeFlex appendBottom16">
			<div className="makeFlex column hrtlCenter imgRatingWrap appendRight8">
  			<img src={this.props.src} alt="popularHotelImg"/>
			<span className="ratingNumber makeFlex perfectCenter font12 whiteText">{this.props.rating}</span>
			</div>
			<div className="calc140 appendLeft8">
			<p className="latoBold appendBottom4 truncate">{this.props.name}</p>			
			<p className="font12 appendBottom4"> <span className="homeSprite ratingBlank"> <span  className={"homeSprite ratingFill " + this.props.starRating} >&nbsp;</span> </span></p>
			<p className="lightGreyText font12">{this.props.address}</p>
			</div>
			
			<div className="priceWrap pushRight">
			<p className="font10 lightGreyText lineThrough appendBottom4"> <span>&#8377;</span> {this.props.price}</p>
			<p className="font18 latoBold appendBottom8"><span>&#8377;</span> {this.props.offerPrice}</p>
			<p className="font12 latoBold appendBottom4 redText">{this.props.offer}</p>
			</div>
			
	</li>
      
    );
  }
}

export default PopularHotelsTile;
