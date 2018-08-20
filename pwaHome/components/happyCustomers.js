import React, { Component } from 'react';
import HappyCustomersTile from './happyCustomersTile';
import '../css/happyCustomers.css';


const happyCustItems = [
	{
		src:'images/userImg.jpg',
		title:'Abhinav Mittal',
		desc:' "Fantastic service on my holiday to Greece. Resolution was.. "'
	},
	{
		src:'images/userImg.jpg',
		title:'Abhinav Mittal',
		desc:' "Fantastic service on my holiday to Greece. Resolution was.. "'
	},
	{
		src:'images/userImg.jpg',
		title:'Abhinav Mittal',
		desc:' "Fantastic service on my holiday to Greece. Resolution was.. "'
	},
	{
		src:'images/userImg.jpg',
		title:'Abhinav Mittal',
		desc:' "Fantastic service on my holiday to Greece. Resolution was.. "'
	}
	
]


class HappyCustomers extends Component {
	happyCustItems(){
	let happyCustlist = []
	for(let i=0;i<happyCustItems.length;i++){
		happyCustlist.push(<HappyCustomersTile key={i} src={happyCustItems[i].src} title={happyCustItems[i].title}  description={happyCustItems[i].desc}/>)
	}
	return happyCustlist;
}
  render() {
    return (
		
		<div className="bdrBottom2 boxPadding makeFlex column">
 <div className="sectionHeading appendBottom4"><h2>{this.props.heading}</h2></div>
 <p className="appendBottom24">{this.props.subHeading}</p>

  <ul className="makeFlex custWrap paddingLR16">
	{this.happyCustItems()}
		</ul>

    
  </div>
	
		
    );
  }
	
}

export default HappyCustomers;
