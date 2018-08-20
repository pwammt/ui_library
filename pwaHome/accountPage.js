import React, { Component } from 'react';
import FormField from './components/login/formField'
import LoginSignupActionButton from './components/login/loginSignupActionButton'
import Footer from './components/footer'
import './css/accountPage.css';

class AccountPage extends Component {
  render() {

	    return (
<div className="accountPageWrapper">
       <div className="bdrBottom2 accountHeader font16 latoBold blackText">
       {this.props.heading}
       </div>
   <div className="boxPadding font16">
       <div className="makeFlex  appendBottom40">
        <span className="iconLetter makeFlex perfectCenter latoBold">A</span>
        <div className="flexOne appendRight8">
            <p className="latoBlack appendBottom2 blackText"> {this.props.name}</p>
            <p className="lightGreyText font12"> {this.props.email}</p>
        </div>
        <a className="pushRight deepskyBlueText font12 appendTop4" href="javascript:void(0)">
        Logout
        </a>
       </div>

{/*page changes*/}

           <div className="makeFlex  appendBottom40">
          <img src="images/mmtBlack.png" height="28px" width="28px" className="appendRight18" alt=" " />
            <div className="flexOne appendRight8">
                <p className="latoBlack appendBottom2 blackText"> MMT Black</p>
                <p className="lightGreyText font12"> Member since Mar 17</p>
            </div>
            <a className="pushRight deepskyBlueText font12 appendTop4" href="javascript:void(0)">
            View Spends
            </a>
           </div>
  {/*/page changes*/}



       <ul className="appendBottom52">
          <li className="appendBottom32"><a className="blackText" href="javascript:void(0)" >Change password</a> </li>
          <li><a  className="blackText" href="javascript:void(0)" >Logout</a> </li>
       </ul>

       <ul>
          <li className="appendBottom32"><a href="javascript:void(0)" className="lightGreyText">Terms & Conditions </a> </li>
          <li><a href="javascript:void(0)" className="lightGreyText">Privacy Policy</a> </li>
       </ul>
       </div>

<Footer/>


       </div>

    );
  }
}

export default AccountPage;
