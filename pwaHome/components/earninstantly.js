import React, { Component } from 'react';

class EarnInstantly extends Component {
  render() {

	    return (
        <div className="bdrBottom2 boxPadding makeFlex column">
<div className="sectionHeading appendBottom16">
 <h2>{this.props.heading}</h2>
 </div>
	<div className="makeFlex appendBottom16  ">

			<span className={"homeSprite " + this.props.style }> </span>
			<div className="calc60 pushRight makeFlex column appendTop4">

			   <p className="">{this.props.description}</p>
			</div>
	</div>

  <p><a className="latoBlack deepskyBlueText makeFlex hrtlCenter" href="javascript:void(0)"> VIEW ALL OFFERS <span className="homeSprite blueArrowIcon appendLeft8"></span> </a></p>
  </div>

    );
  }
}

export default EarnInstantly;
