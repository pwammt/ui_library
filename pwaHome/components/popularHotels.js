	import React, { Component } from 'react';
import PopularHotelsTile from './popularHotelsTile';
import '../css/popularHotelsTile.css';


const popularHotelsItems = [
	{
		src:'images/hotel.jpg',
		rating:'4.9/5',
		name:'Royal Oak',
		starRating:'fourHalfStar',
		address:'Juhu Tara',
		price:'1000',
		offerPrice:'3,567',
		offer:'70% off'
	},
	{
		src:'images/hotel.jpg',
		rating:'4.9/5',
		name:'DoubleTree by Hilton',
		starRating:'oneHalfStar',
		address:'Juhu Tara',
		price:'4000',
		offerPrice:'2,000',
		offer:'50% off'
	},
	{
		src:'images/hotel.jpg',
		rating:'4.9/5',
		name:'DoubleTree by Hilton',
		starRating:'oneHalfStar',
		address:'Juhu Tara',
		price:'4000',
		offerPrice:'2,000',
		offer:'50% off'
	}

];


class PopularHotels extends Component {
	popularHotelsItems(){
	let popularHotelslist = []
	for(let i=0;i<popularHotelsItems.length;i++){
		popularHotelslist.push(<PopularHotelsTile key={i} src={popularHotelsItems[i].src} rating={popularHotelsItems[i].rating}  name={popularHotelsItems[i].name} starRating={popularHotelsItems[i].starRating} address={popularHotelsItems[i].address} price={popularHotelsItems[i].price} offerPrice={popularHotelsItems[i].offerPrice} offer={popularHotelsItems[i].offer}/>)
	}
	return popularHotelslist;
}
  render() {
    return (

		<div className="bdrBottom2 boxPadding makeFlex column">
 <div className="sectionheading appendBottom4"> <h2> {this.props.heading}</h2></div>
 <p className="appendBottom16">{this.props.subHeading}</p>

  <ul className="makeFlex column appendBottom16">
	{this.popularHotelsItems()}

	<li className="makeFlex appendBottom16">
      <div className="makeFlex column hrtlCenter imgRatingWrap appendRight8">
        <img src="images/hotel.jpg" alt="popularHotelImg"/>
      <span className="ratingNumber makeFlex perfectCenter font12 whiteText">2.5/5</span>
      </div>
      <div className="calc140 appendLeft8">
      <p className="latoBold appendBottom4 truncate">Carlton by Mughal
Sheraton</p>
      <p className="font12 appendBottom4"> <span className="homeSprite ratingBlank"> <span  className={"homeSprite ratingFill twoHalfStar"} >&nbsp;</span> </span></p>
      <p className="lightGreyText font12">Juhu Tara</p>
      </div>

      <div className="priceWrap pushRight">
      <a href="javascript:void(0)" className="font12 lightGreyText latoBold">SEE PRICE</a>


      </div>

  </li>
	{/*loader changes*/}
			<li className="makeFlex appendBottom16 interstitial">
					<span className="imgLoader"> </span>
					<div className="calc60 pushRight makeFlex column">
					<p className="interstitial_data width80 appendBottom6 appendTop14">
					</p>
					<p className="interstitial_data width60 ">
					</p>
					</div>
			</li>
			{/*/loader changes*/}
		</ul>

<p><a className="latoBlack deepskyBlueText makeFlex hrtlCenter" href="javascript:void(0)"> VIEW ALL HOTELS <span className="homeSprite blueArrowIcon appendLeft8"></span> </a></p>

  </div>


    );
  }

}

export default PopularHotels;
