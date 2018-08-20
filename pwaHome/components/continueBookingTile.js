import React, { Component } from 'react';


class ContinueBookingTile extends Component {
  render() {

	    return (
<li className="recomTile">
    <div className="makeFlex appendBottom16">
        <img className="pushLeft" height="20px" width="20px" src={this.props.src} alt="flight"/>
        <div className="pushLeft flexOne appendLeft12">
            <p className="latoMedium font12">{this.props.airways}</p>
            <p className="font18"><span>&#8377;</span> {this.props.price}</p>
        </div>

    </div>



    <div className="appendLeft8 font14 listTime makeRelative">
        <span className="timeline"> </span>
        <p className="lightGreyText appendBottom6 ">{this.props.deptTime}</p>
        <p className="lightGreyText">{this.props.arrivalTime}</p>
    </div>


      <p className="lightGreyText font12"> <span className="iconCal homeSprite"> </span>{this.props.date}</p>

</li>

    );
  }
}

export default ContinueBookingTile;
