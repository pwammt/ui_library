import React, { Component } from 'react';
import '../css/allowNotifications.css';

class AllowNotifications extends Component {
  render() {

	    return (
        <div className="bdrBottom2 boxPadding">
            <div className="notificationCard">
                <div className="makeFlex appendBottom16 ">
                      <span className="latoBold font20 width60">Get notified at the right time </span>
                      <span className="homeSprite iconNotification pushRight"> </span>
                </div>

                <p className="font16 appendBottom24">
               Allow notifications & never miss a deal, start of our sales & updates on your bookings.
                </p>

                <p>
                <a className="latoBlack deepskyBlueText makeFlex hrtlCenter" href="javascript:void(0)"> ALLOW NOTIFICATIONS
                <span className="homeSprite blueArrowIcon appendLeft8"></span> </a>
                </p>
            </div>

       </div>

    );
  }
}

export default AllowNotifications;
