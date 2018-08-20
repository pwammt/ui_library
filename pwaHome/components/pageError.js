import React, { Component } from 'react';
import Header from './header';
import ActionBtn from './actionBtn';
import '../css/pageError.css';

class PageError extends Component {
  render() {

	    return (
<div>
       <Header/>
        <div className="pageErrorWrapper makeFlex perfectCenter column">


             <div className="appendBottom24"> <img width="113px" height="135px" src={this.props.errorImg}/> </div>
             <p className="latoBlack font22 appendBottom8">{this.props.errorName}</p>
             <p className="font16 lightGreyText"> {this.props.desp}</p>
             <ActionBtn title={"GO BACK TO HOME"}/>


       </div>
       </div>

    );
  }
}

export default PageError;
