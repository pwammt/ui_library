	import React, { Component } from 'react';
import ContinueBookingTile from './continueBookingTile';
import '../css/popularHotelsTile.css';


const continueBookingItems = [
	{
    airways:'Airasia',
		src:'images/airAsia.png',
		date:'21 May 17',
		deptTime:'6:45 AM ',
		arrivalTime:'11:00 AM ',
		price:'1000'
	},
	{
		airways:'Indigo',
		src:'images/goAir.png',
		date:'21 May 17',
		deptTime:'6:45 AM ',
		arrivalTime:'11:00 AM ',
		price:'5,456'
	},
	{
		airways:'Spicejet',
		src:'images/airAsia.png',
		date:'21 May 17',
		deptTime:'6:45 AM ',
		arrivalTime:'11:00 AM ',
		price:'4.567'
	},
	{
		airways:'Spicejet',
		src:'images/airAsia.png',
		date:'21 May 17',
		deptTime:'6:45 AM ',
		arrivalTime:'11:00 AM ',
		price:'4.567'
	}

];


class ContinueBooking extends Component {
	continueBookingItems(){
	let continueBookinglist = []
	for(let i=0;i<continueBookingItems.length;i++){
		continueBookinglist.push(
			<ContinueBookingTile key={i}
			src={continueBookingItems[i].src}
			date={continueBookingItems[i].date}
					airways={continueBookingItems[i].airways}
			deptTime={continueBookingItems[i].deptTime}
			arrivalTime={continueBookingItems[i].arrivalTime}
			price={continueBookingItems[i].price}  />
		 )
	}
	return continueBookinglist;
}
  render() {
    return (

		<div className="bdrBottom2 boxPadding makeFlex column">
 <div className="sectionHeading appendBottom4"><h2>{this.props.heading}</h2></div>
 <p className="appendBottom16 latoBold makeFlex hrtlCenter"> <span>{this.props.fromCity}</span> <span className="homeSprite greyArrowIcon appendLeft8 appendRight8"></span> <span>{this.props.toCity}</span> </p>

  <ul className="makeFlex appendBottom16 flexWrap">
	{this.continueBookingItems()}
	<li className="recomTile interstitial">
	    <div className="makeFlex appendBottom16">
	     <span className="airlineimgLoader"> </span>
	        <div className="pushLeft flexOne appendLeft12">
	            <p className="latoMedium font12 interstitial_data appendBottom4"></p>
	            <p className="font18 interstitial_data"></p>
	        </div>

	    </div>



	    <div className="appendLeft8 font14 listTime makeRelative">
	        <span className="timeline"> </span>
	        <p className="lightGreyText appendBottom6 interstitial_data"></p>
	        <p className="lightGreyText interstitial_data"></p>
	    </div>


	      <p className="lightGreyText font12 interstitial_data"> </p>

	</li>
		</ul>

<p><a className="latoBlack deepskyBlueText makeFlex hrtlCenter" href="javascript:void(0)"> SEE ALL FLIGHTS <span className="homeSprite blueArrowIcon appendLeft8"></span> </a></p>

  </div>


    );
  }

}

export default ContinueBooking;
