import React, { Component } from 'react';
import RecentSearchesTile from './recentSearchesTile';
import '../css/recentSearches.css';



const recentSearchItems = [

	{	
		recentClass:'rail',
		recentSearchIcon:'recentRailIcon',
		dateStart:'28 Mar 17',
		pnr:'2234678750'


	},
	{	
		recentClass:'flight',
		recentSearchIcon:'recentFlightIcon',
		dateStart:'28 Mar 17',
		fromCity:'Delhi -',
		toCity:'Bengaluru'


	},
	{	
		recentClass:'flight',
		recentSearchIcon:'recentFlightIcon',
		dateStart:'30 Mar -',
		dateend:'2 Apr 17',
		fromCity:'Ahemdabad -',
		toCity:'Delhi'


	},
	{	
		recentClass:'hotel',
		recentSearchIcon:'recentHotelIcon',
		dateStart:'30 Mar -',
		dateend:'2 Apr 17',
		hotelName:'Radisson Blue, Pune'

	}




];


class RecentSearches extends Component {
	recentSearchItems(){
	let recentSearchlist = []
	for(let i=0;i<recentSearchItems.length;i++){
		recentSearchlist.push(<RecentSearchesTile key={i} recentClass={recentSearchItems[i].recentClass} recentSearchIcon={recentSearchItems[i].recentSearchIcon} dateStart={recentSearchItems[i].dateStart} dateend={recentSearchItems[i].dateend}  toCity={recentSearchItems[i].toCity}
						  fromCity={recentSearchItems[i].fromCity}	hotelName={recentSearchItems[i].hotelName} pnr={recentSearchItems[i].pnr}/>)
	}
	return recentSearchlist;
}
  render() {
    return (

<div className="bdrBottom2 boxPadding makeFlex column">
 <div className="appendBottom16 sectionHeading"><h2> {this.props.heading} </h2></div>

  <ul className="makeFlex column">
	{this.recentSearchItems()}

	<li className="makeFlex appendBottom16 hrtlCenter interstitial">
				<span className="homeSprite appendRight8 recentImgLoader " ></span>
			<div className="recentSearchInfo hrtlCenter font12">
		    <p className="interstitial_data pushRight makeFlex width100"> </p>
			</div>


	</li>


		</ul>


  </div>


    );
  }

}

export default RecentSearches;
