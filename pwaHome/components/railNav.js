import React, { Component } from 'react';
import '../css/rail.css';

class railNav extends Component {


render() {


	    return (
				<ul className="railTabs font12 appendBottom20">
				<li>Booking</li>
				<li onClick={() => this.props.railNavTab(0)} className={this.props.selected==0 ? 'selected':''}>PNR Status</li>
				<li onClick={() => this.props.railNavTab(1)} className={this.props.selected==1 ? 'selected':''}><span className="liveTag">Live</span>  Train Status</li>
				</ul>
	
 );
  }
}

export default railNav;
