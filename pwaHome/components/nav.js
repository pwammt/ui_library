import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import NavLink from "./navLink";
import '../css/nav.css';

class Nav extends Component {
  constructor(props){
    super(props);
    		autoBind(this);
   this.state = {error:true};
  }
hideError()
{
this.setState({error:false});
}
  render() {



    return (



     <nav className="shadow_btm append_bottom16 paddingT16 ">
    <ul className="font10 paddingLR16">
      <li><NavLink  to={'/'}> <span className="navIconArea makeFlex perfectCenter appendBottom8"> <span className="homeSprite navIcon flight">&nbsp;</span> </span> Flights  </NavLink></li>
     <li><NavLink  to={'/components/hotelWidget'}> <span className="navIconArea makeFlex perfectCenter appendBottom8"> <span className="homeSprite navIcon hotel">&nbsp;</span> </span> Hotels </NavLink></li>
      <li><a href="javascript:void(0)"> <span className="navIconArea makeFlex perfectCenter appendBottom8"> <span className="homeSprite navIcon holidays">&nbsp;</span> </span> Holidays</a></li>
      <li><a href="javascript:void(0)"> <span className="navIconArea makeFlex perfectCenter appendBottom8"> <span className="homeSprite navIcon bus">&nbsp;</span> </span> Buses</a></li>
      <li><a href="javascript:void(0)"> <span className="navIconArea makeFlex perfectCenter appendBottom8"> <span className="homeSprite navIcon cab">&nbsp;</span></span> Cabs</a></li>
      <li><NavLink  to={'/components/railWidget'}><span className="navIconArea makeFlex perfectCenter appendBottom8"> <span className="homeSprite navIcon rails">&nbsp;</span> </span> Rails</NavLink></li>
    </ul>
{/*offline error*/}
      {this.state.error && <div className="animated slideInUp offlineError font12 latoBold makeFlex" ><span >You are not connected to the internet</span> <span onClick={this.hideError} className="pushRight iconCrossWhite homeSprite appendTop4"> </span></div>}
{/*/offline error*/}
  </nav>
    );
  }
}

export default Nav;
