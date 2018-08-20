import React, { Component } from 'react';

import 'css/accountPage.css';

class AccountPage extends Component {
  render() {

	    return (
<div className="accountPageWrapper">
       <div className="bdrBottom2 accountHeader font16 latoBold blackText">
       Account
       </div>
   <div className="boxPadding font16">
       <div className="makeFlex  appendBottom40">
        <span className="iconLetter makeFlex perfectCenter latoBold">A</span>
        <div className="flexOne appendRight8">
            <p className="latoBlack appendBottom2"> {this.props.name}</p>
            <p className="lightGreyText"> {this.props.email}</p>
        </div>
        <a className="pushRight deepskyBlueText font12 appendTop4" href="javascript:void(0)">
        Logout
        </a>
       </div>
       <ul >
        <li className="appendBottom32"><a href="javascript:void(0)" className="lightGreyText">Terms & Conditions </a> </li>
        <li><a href="javascript:void(0)" className="lightGreyText">Privacy Policy</a> </li>
       </ul>
       </div>
       <BottomBar/>
       </div>

    );
  }
}

export default AccountPage;
