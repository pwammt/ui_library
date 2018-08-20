import React, { Component } from 'react';
import autoBind from 'react-autobind';


const offersAllItems = [
	{
		name:'ALL'
	},
	
	{
		name:'Flights'
	},
	{
		name:'Hotels'
	},
	
	{
		name:'Holidays'
	},
	{
		name:'Others'
	}
	
];


class SelectOffers  extends Component {	
		constructor(props) {
    super(props);
		autoBind(this);
    this.state = {selected:null};
  }
		
	handleClick(i) {
		  this.setState({
        selected : i
		
    });
	}

	
	offersAllItems(){
	let offersAll = []
	for(let i=0;i<offersAllItems.length;i++){
		offersAll.push( <li className={"makeFlex perfectCenter " + (this.state.selected == i ? 'selected': '')} key={i} onClick={()=>{this.handleClick(i)}}   > {offersAllItems[i].name} </li>)
						
	}
	return offersAll;
}
  render() {
    return (
		
	<div>
  <ul className="makeFlex offersType">
	{this.offersAllItems()}
		</ul>
	</div>	

	
		
    );
  }
	
}


export default SelectOffers;
