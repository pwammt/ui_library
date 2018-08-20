
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header'
import Nav from './components/nav'
import FlightWidget from './components/flightWidget'
import HotelWidget from './components/hotelWidget'
import RailWidget from './components/railWidget'

import Offers from './components/offers'
import WhyBookWithUs from './components/whyBookWithUs'
import PopularHotels from './components/popularHotels'
import ContinueBooking from './components/continueBooking'
import RecentSearches from './components/recentSearches'
import Trending from './components/trending'
import LoginDeal from './components/loginDeal'
import HappyCustomers from './components/happyCustomers'
import NewsLetter from './components/newsLetter'
import Support from './components/support'
import UsefulLinks from './components/usefulLinks'
import Footer from './components/footer'
import BottomBar from './components/bottomBar'
import LowestFares from './components/lowestFlightFares'
import EarnInstantly from './components/earninstantly'
import AllowNotifications from './components/allowNotifications.js'
import DownloadBannerTop from './components/downloadBannerTop.js'
import DownloadBannerBottom from './components/downloadBannerBottom.js'
import {MmtBooking} from './components/mmtBooking.js'
import autoBind from 'react-autobind';
import MyBizPopup from './components/myBizPopup.js';
import LoginCard from './components/loginCard.js';


class HomePage extends React.Component {

  constructor(props){
    super(props);
    autoBind(this);
     this.state={banner:true,bizPopup:true}
 }

 hideBanner()
 {
    this.setState({banner:false})
   //console.log(1);
 }
hidePopup()
{
     this.setState({bizPopup:false})
     document.body.style.overflow = "auto";
}
render() {
      return (
  <div>
      <Router>
      <div>
            {this.state.banner && <DownloadBannerTop hidebanner={this.hideBanner}/>}
             <Header/>

            <Nav/>
            <Switch>
                <Route exact path='/' component={FlightWidget} />
                <Route exact path='/components/hotelWidget' component={HotelWidget} />
                <Route exact path='/components/railWidget' component={RailWidget} />
            </Switch>
            <main>
            <AllowNotifications/>
            <RecentSearches heading={"Recent Searches"}/>
            <LoginCard/>
            <ContinueBooking heading={"Recommended Flights"} fromCity={"Mumbai"} toCity={"Delhi"}/>
            <LowestFares heading={"Lowest Flight Fares"} airways={"JetAirways, Indigo & more "} />
            <Offers heading={"Offers"} subHeading={"24 personalized deals and offers"}/>
            <DownloadBannerBottom/>
            <WhyBookWithUs name={"Why Book With Us"}/>
             <EarnInstantly style={"zeroCancalIcon"} heading={"Earn Rs 555 instantly"} description="Just login to your account & earn. Hurry! offer expires soon."/>
             <PopularHotels heading={"Popular Hotels"} subHeading={"24 personalized deals and offers"}/>
             <Trending heading={"Trending Destinations"} subHeading={"Curated hotels for a relaxing stay"}/>
             <LoginDeal/>
             <HappyCustomers heading={"Over 1,10,36,000 Happy Customers till date"} subHeading={"10,568 bookings today & counting"}/>
             <NewsLetter heading={"Subscribe to our Newsletter"} subHeading={"Never miss a deal with our personalized e-mails + get an early  sneak peaks to our sales"}/>
             <Support/>
             </main>
            <MmtBooking/>
            <UsefulLinks/>
          { this.state.bizPopup && <MyBizPopup hidePopup={this.hidePopup}/>}

             <Footer/>
      </div>
       </Router>
      <BottomBar/>
  </div>


		  );
   }
}
export default HomePage;
