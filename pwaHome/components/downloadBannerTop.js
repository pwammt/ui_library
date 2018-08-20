import React, { Component } from 'react';
import '../css/downloadBanner.css';

class DownloadBannerTop extends Component {


  render() {

	    return (
        <div className="downloadBanner downloadBannerTop ">
              <span onClick={this.props.hidebanner} className="iconCrossWhite homeSprite appendRight12"> </span>
              <img className="appendRight12" height="40px" width="27px" src="../images/downloadApp1.png" />
              <div className="flexOne font12 appendRight8">
                  <p className="latoBold appendBottom2"> Download our free app</p>
                  <p> Save more with app only offers</p>
              </div>
              <a className="installBtn pushRight latoBlack">INSTALL</a>

       </div>

    );
  }
}

export default DownloadBannerTop;
