import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../css/tnc.css';





class Tnc extends React.Component {

 constructor(props){
		super(props);
		autoBind(this);
		this.state = {overlay:false};
	}


   render() {
      return (


<div className="boxPadding tncWrapper animated visible slideUpEffect">
<div className="makeFlex ">
		 <h3 className="latoBold">Terms & Conditions </h3>
		 <span className="iconCross homeSprite pushRight" onClick={this.props.overlayFunction}> </span>
		 </div>

		 <p> The More the Merrier! Get upto Rs. 4000 Instant </p>
		 <p>Discount if you book for 4 or more passengers!</p>
		 <p>The offer is valid for Domestic Flight bookings made from 20th Mar'18 12:00 to 30th Apr'18 23:59</p>


</div>

      );
   }
}
export default Tnc;
