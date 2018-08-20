import React, { Component } from 'react';


class whatsThisOverlay extends Component {
  render() {

	    return (
              <div className="overlayOuter makeFlex column">
                <span className="perTagBig font18 latoBlack appendBottom10">87%</span>
                <p className="font18 latoBlack blackText lineHeight24 appendBottom20">Your WL confirmation probablity is <span className="greenText">  87% (Very High)</span> based on  past booking history of this train</p>
                <p className="makeFlex hrtlCenter font12 appendBottom10"> <span className="lowTag"> 0 - 30% </span> <span>Very low chance of confirmation</span> </p>
                <p className="makeFlex hrtlCenter font12 appendBottom10"> <span className="mediumTag"> 30% - 70% </span> <span>Medium chance of confirmation</span> </p>
                <p className="makeFlex hrtlCenter font12 appendBottom20"> <span className="highTag"> 70% - 100% </span> <span>Very high chance of confirmation</span> </p>
                <p className="appendBottom24"><span className="latoBold">Note:</span>  MMT does not hold any responsibiltiy of non-confirmation of the ticket. </p>
                <span onClick={this.props.cross} className="deepskyBlueText font16 latoBlack pushRight">OK, GOT IT!</span>

              </div>

    );
  }
}

export default whatsThisOverlay;
