import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import NavLink from "./navLink";
import '../css/bottomBar.css';

class BottomBar extends Component {

  constructor(props){
    super(props);
    autoBind(this);
   this.state=
   {showCoach:true}
}


hideCoach()
{

 this.setState({showCoach:false})

}

  render() {
    return (

    <ul className="font12 bottomBarWrap makeFlex spaceAround latoBold">
      <li> <NavLink  to={'/'} > <span className="homeSprite bottomBarIcon home appendBottom4"> &nbsp;</span>  Home </NavLink></li>
{/*offer added*/}
      <li> <NavLink  to={'/'} > <span className="homeSprite bottomBarIcon iconOffer appendBottom4"> &nbsp;</span>  Offers </NavLink></li>
{/*/offer added*/}


	<li><a href="javascript:void(0)"><span className="homeSprite bottomBarIcon trips appendBottom4">&nbsp;</span>  Trips </a></li>
{/*badge changes*/}
    <li className="makeRelative ">
{/*coachmark added*/}
    {this.state.showCoach && <div className="walletCoach">
        <p>
        Login to earn  555 wallet
        money instantly
        </p>
        <span onClick={this.hideCoach} className="iconCrossWhite homeSprite"> </span>
    </div>}
  {/*/coachmark added*/  }

<a href="javascript:void(0)"><span className="walletBadge  latoBold ">1.2 k</span><span className="homeSprite bottomBarIcon wallet appendBottom4">&nbsp;</span>  Wallet </a></li>
{/*/badge changes*/}
    <li><NavLink  to={'/accountPage'}> <span className="homeSprite bottomBarIcon account appendBottom4">&nbsp;</span>  Account </NavLink></li>
    </ul>

    );
  }
}

export default BottomBar;
