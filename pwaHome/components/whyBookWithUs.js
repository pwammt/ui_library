import React, { Component } from 'react';
import WhyBookWithUsTile from './whyBookWithUsTile';
import '../css/whyBookWithUs.css';


const bookWithUs = [
	{
		style:'zeroCancalIcon',
		title:'Zero Cancellation',
		desc:' Get full refund on cancellation penalties. Starting @ only Rs 99.'
	},
	{
		style:'payLaterIcon',
		title:'Book Now Pay Later',
		desc:' Instant booking confirmation pay only after your stay.'
	},
	{
		style:'assuredIcon',
		title:'MMT Assured',
		desc:'Get your problems resolved in 60 mins or get your money back.'
	}

]


class WhyBookWithUs extends Component {

bookWithUs(){
	let bookWithUslist = []
	for(let i=0;i<bookWithUs.length;i++){
		bookWithUslist.push(<WhyBookWithUsTile key={i} style={bookWithUs[i].style} title={bookWithUs[i].title}  description={bookWithUs[i].desc}/>)
	}
	return bookWithUslist;
}
	render() {
    return (

<div className="bdrBottom2 boxPadding makeFlex column">
 <div className="sectionHeading appendBottom16"><h2>{this.props.name}</h2></div>

  <ul className="makeFlex column appendBottom16">

		{this.bookWithUs()}
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

<div className="card makeFlex hrtlCenter padding8">
	<span className="calc80 latoBold">Over 20+ features & reasons
to  <span className="darkGreenText">trust</span> the Brand MMT</span>
	<a href="javascript:void(0)" className="latoBlack pushRight">
		SEE ALL
		</a>
</div>


  </div>


    );
  }

}

export default WhyBookWithUs;
