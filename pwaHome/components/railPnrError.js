import React, { Component } from 'react';
import ActionBtn from './actionBtn';






class railPnrError extends Component {

  render() {
    return (

		<div className="makeFlex column boxPadding vrtlCenter textCenter">
      
      <div className="errorScreen">
      <p className="pnrErrorImg appendBottom20"><img src="images/pnrError.png"/></p>
      <p className="font22 blackText latoBlack appendBottom8">{this.props.pnrNo}</p>
      <p className="font16 appendBottom20">This PNR is either not generated or flushed</p>
      </div>
      <p> <ActionBtn title={"Try a Different PNR"}/> </p>

    </div>


    );
  }

}

export default railPnrError;
