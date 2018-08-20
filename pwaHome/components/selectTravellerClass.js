import React, { Component } from 'react';
import autoBind from 'react-autobind';


const travelClassItems = [
	{
		name:'Economy'
	},
	
	{
		name:'Premium Economy'
	},
	{
		name:'Business'
	},
	
	{
		name:'First Class'
	}
	
];


class SelectTravellerClass  extends Component {	
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

	
	travelClassItems(){
	let travelClass = []
	for(let i=0;i<travelClassItems.length;i++){
		travelClass.push( <li className={"makeFlex latoBold perfectCenter " + (this.state.selected == i ? 'selected': '')} key={i} onClick={()=>{this.handleClick(i)}}   > {travelClassItems[i].name} </li>)
						
	}
	return travelClass;
}
  render() {
    return (
		
	<div>
  <ul className="makeFlex travelClassType">
	{this.travelClassItems()}
		</ul>
	</div>	

	
		
    );
  }
	
}


export default SelectTravellerClass;
