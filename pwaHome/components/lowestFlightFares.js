	import React, { Component } from 'react';
import LowestFlightFaresTile from './lowestFlightFaresTile';
import '../css/popularHotelsTile.css';


const lowestFlightFares = [
	{
		src:'images/airAsia.png',
		time:'Chennai to Hyderabad',
		date:'21 May 17',
		price:'1000'
	},
	{
		src:'images/goAir.png',
		time:'Chennai to Hyderabad ',
		date:'21 May 17',
		price:'5,456'
	},
	{
		src:'images/airAsia.png',
		time:'Bengaluru to Chennai',
		date:'21 May 17',
		price:'4.567'
	}

];

class LowestFares extends Component {
	lowestFareFlights(){
	let lowestFarelist = [];
	for(let i=0;i<3;i++){
		lowestFarelist.push(<LowestFlightFaresTile key={i} src={lowestFlightFares[i].src} time={lowestFlightFares[i].time}  date={lowestFlightFares[i].date}  price={lowestFlightFares [i].price}  />)
	}
	return lowestFarelist;
}
  render() {
    return (

		<div className="bdrBottom2 boxPadding makeFlex column">
 <div className="sectionHeading appendBottom4"><h2>{this.props.heading}</h2></div>
 <p className="appendBottom16 latoBold makeFlex hrtlCenter"> <span>{this.props.airways}</span> </p>

  <ul className="makeFlex column appendBottom16 noDate">
	{this.lowestFareFlights()}
	<li className="makeFlex appendBottom16 interstitial">
	<div className="makeFlex column hrtlCenter imgRatingWrap appendRight8">
			<span className="continueImgLoader"> </span>
			</div>
			<div className="calc60 pushRight makeFlex column">
			<p className="interstitial_data width80 appendBottom6 appendTop4">
			</p>
			<p className="interstitial_data width60 ">
			</p>
			</div>
	</li>
		</ul>

<p><a className="latoBlack deepskyBlueText makeFlex hrtlCenter" href="javascript:void(0)"> VIEW ALL FARES <span className="homeSprite blueArrowIcon appendLeft8"></span> </a></p>

  </div>


    );
  }

}

export default LowestFares;
