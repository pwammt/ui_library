import React, { Component } from 'react'; 
import autoBind from 'react-autobind';


class SelectChildAge  extends Component {
	
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
	
		
  render() {
	  
	  let arr = [];
	  for(let i =1; i <= 12; i++) {
		  arr.push(<li className={this.state.selected == i ? 'selected': '' } key={i} onClick={()=>{this.handleClick(i)}}>{i}</li>)
	  }
	
	  
	    return (
			<div className="makeFlex column appendBottom20">
			<p className="font18 lightGreyText appendBottom10"> Select Age of Child 1 </p>
			
			<ul className="ageSlider">
			{arr}
			
			</ul>
						
			</div>
      
    );
  }
}

export default SelectChildAge;
