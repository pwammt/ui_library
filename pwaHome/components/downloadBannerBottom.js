import React, { Component } from 'react';
import '../css/downloadBanner.css';

class DownloadBannerBottom extends Component {


  render() {

	    return (
       <div className="boxPadding">
        <div className="downloadBanner downloadBannerBottom ">
            <img width="69px" height="55px" className="bannerImg" src="../images/downloadApp2.png"/>
            <p className="heading latoBold">
                Download our free mobile app
            </p>


            <p className="bannerText appendBottom24">
                Get special <span className="latoBlack"> app discounts </span>, best-in-the-class features
                for a smoother booking experience, track your bookings seamlessly & much more.
            </p>

            <p>
                <a className="latoBlack">GET THE APP  <span className="iconWhiteArrowSmall homeSprite"> </span> </a>
            </p>
       </div>
       </div>

    );
  }
}

export default DownloadBannerBottom;
