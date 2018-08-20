import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
    
      <h2>
        <span className={`homeSprite appendRight8 ${this.props.iconClass}`}></span>
        <div className="makeFlex column flexOne">
        <p className=" font20 latoBlack blackText appendBottom4">{this.props.title}</p>
        <p className="font14 latoRegular">{this.props.subTitle}</p>
        </div>
      </h2>


    );
  }
}

export default Header;
