import React, { Component } from 'react';

class HappyCustomersTile extends Component {
  render() {
	  
	    return (
	<li> 
			<div className="makeFlex appendBottom16">
  			<span className="userImg"><img src={this.props.src} alt="flight"/></span>
			<div className="calc70 paddingL16">
			<p className=" latoBold">{this.props.title}</p>			
			<p className="lightGreyText">{this.props.description}</p>
			</div>
			</div>
	</li>
      
    );
  }
}

export default HappyCustomersTile;
