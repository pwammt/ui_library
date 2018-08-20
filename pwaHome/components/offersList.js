import React, { Component } from 'react';

class OffersList extends Component {
  render() {
	  
	    return (
	<li className="appendBottom16">
  		 {this.props.detail}
	</li>
      
    );
  }
}

export default OffersList;
