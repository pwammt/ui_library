import React, { Component } from 'react';

class WhyBookWithUsTile extends Component {
  render() {
	  
	    return (
	<li className="makeFlex appendBottom16">  		
			<span className={"homeSprite " + this.props.style }> </span>
			<div className="calc60 pushRight makeFlex column">
			<p className="latoBlack">{this.props.title}</p>			
			<p className="">{this.props.description}</p>
			</div>
	</li>
      
    );
  }
}

export default WhyBookWithUsTile;
