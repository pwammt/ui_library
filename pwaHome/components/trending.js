import React, { Component } from 'react';
import TrendingTile from './trendingTile';
import '../css/offers.css';



const trendingItems = [
	{
		src:'images/trending.jpg',
		title:'Udaipur',
		views:'285',
		desc:' 16 Weekend Offers Available',
		color:'greenText'
	},
	
	{
		src:'images/trending2.jpg',
		title:'Bengaluru',
		views:'300',
		desc:' 20% more bookings than last week ',
		color:'redText'
	},
	
	{
		src:'images/trending2.jpg',
		title:'Goa',
		views:'285',
		desc:' 16 Weekend Offers Available',
		color:'greenText'
	},
	{
		src:'images/trending3.jpg',
		title:'Mumbai',
		views:'300',
		desc:' 20% more bookings than last week ',
		color:'redText'
	},
	
	
	
];


class Trending extends Component {
	trendingItems(){
	let trendinglist = []
	for(let i=0;i<trendingItems.length;i++){
		trendinglist.push(<TrendingTile key={i} src={trendingItems[i].src} title={trendingItems[i].title} views={trendingItems[i].views}  description={trendingItems[i].desc} color={trendingItems[i].color}/>)
	}
	return trendinglist;
}
  render() {
    return (
		
		<div className="bdrBottom2 boxPadding makeFlex column">
 <div className="sectionHeading appendBottom4"><h2>{this.props.heading}</h2></div>
 <p className="appendBottom16">{this.props.subHeading}</p>

  <ul className="makeFlex offersWrap">
	{this.trendingItems()}
		</ul>
		
<p><a className="latoBlack deepskyBlueText makeFlex hrtlCenter" href="javascript:void(0)"> VIEW ALL DESTINATIONS <span className="homeSprite blueArrowIcon appendLeft8"></span> </a></p>
    
  </div>
	
		
    );
  }
	
}

export default Trending;
