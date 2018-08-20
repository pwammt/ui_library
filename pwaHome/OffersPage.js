import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavLink from "./components/navLink";
import OffersTile from './components/offersTile';
import SelectOffers from './components/selectOffers';
import autoBind from 'react-autobind';
import Tnc from './components/Tnc.js';
	import './css/offers.css';


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
	},
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
	},{
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



class OffersPage extends Component {

	constructor(props){
		super(props);
		autoBind(this);
		this.state = {overlay:false};
	}

	overlayToggle(){
		this.setState({overlay:!this.state.overlay});
		if(!this.state.overlay){
			document.body.style.overflow = "hidden";
		}
			else{
				document.body.style.overflow = "visible";
			}
  		}



	offersItems(){
	let offerslist = []
	for(let i=0;i<offersItems.length;i++){
		offerslist.push(<OffersTile overlayFunction={this.overlayToggle} key={i} src={offersItems[i].src} title={offersItems[i].title}  description={offersItems[i].desc}/>)
	}
	return offerslist;
}


  render() {
    return (
<div>
		<div className="offersPage animated visible slideUpEffect">
			<div className="makeFlex column boxPadding">
				<p className="makeFlex appendBottom16" >
		       <span onClick={this.props.overlayClose} className="homeSprite backIcon">&nbsp;</span>
				   <span className="latoBlack font16 appendLeft16">Offers</span>
				</p>
	       <SelectOffers/>
			</div>
			 <ul className="makeFlex offersWrap paddingLR16">
		{this.offersItems()}
			</ul>



		</div>
			{this.state.overlay && 	<Tnc overlayFunction={this.overlayToggle}/>}
</div>

    );
  }

}

export default OffersPage;
