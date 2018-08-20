import React, { Component } from 'react';
import autoBind from 'react-autobind';
import OffersTile from './offersTile';
import NavLink from "./navLink";

import '../css/offers.css';


const offersItems = [
	{
		src:'images/bestselling3.jpg',
		desc:' Zero Cancellation Charge on Flights'
	},
	{
		src:'images/bestselling2.jpg',
		desc:' Crazy Deals on Summer Holiday Packages. Plan It Now!'
	},
	{
		src:'images/bestselling1.jpg',
		desc:'16 Weekend Offers Available'
	},
	{
		src:'images/bestselling.jpg',
		desc:' 20% more discount on return cabs'
	}

]


class Offers extends Component {

	constructor(props){
		super(props);
		autoBind(this);
		this.state = {overlay:false};
	}





	offersItems(){
	let offerslist = []
	for(let i=0;i<offersItems.length;i++){
		offerslist.push(<OffersTile key={i} src={offersItems[i].src} title={offersItems[i].title}  description={offersItems[i].desc}/>)
	}
	return offerslist;
}
  render() {
    return (

		<div className="bdrBottom2 boxPadding makeFlex column">
 <p className="font20 latoBlack blackText appendBottom4">{this.props.heading}</p>
 <p className="appendBottom16">{this.props.subHeading}</p>

  <ul className="makeFlex offersWrap">
	{this.offersItems()}
{/*loading state*/}
	<li  className="interstitial">
		<div className="offerImageLoader">
		</div>
		<p className="interstitial_data width80 appendBottom6">
		</p>
		<p className="interstitial_data width60 ">
		</p>
	</li>
	{/*/loading state*/}
		</ul>

<p><NavLink to={'/OffersPage'}><span className="latoBlack deepskyBlueText makeFlex hrtlCenter"> VIEW ALL OFFERS <span className="homeSprite blueArrowIcon appendLeft8"></span> </span> </NavLink></p>


  </div>


    );
  }

}

export default Offers;
