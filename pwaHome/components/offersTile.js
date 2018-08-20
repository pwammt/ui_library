import React, { Component } from 'react';

class OffersTile extends Component {
  render() {

	    return (
	<li onClick={this.props.overlayFunction} className="makeFlex column appendBottom16">
  			<img src={this.props.src} alt="offersImg"/>
			  <p className="latoBold paddingT8">{this.props.description}</p>
	</li>

    );
  }
}

export default OffersTile;
