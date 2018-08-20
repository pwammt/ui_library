import React from 'react';
//import ReactDOM from 'react-dom';
import autobind from 'react-autobind'
import ReviewForm from './components/HotelReview/ReviewForm';
import ReviewImportantInfo from './components/HotelReview/ReviewImportantInfo';
import PriceDetails from './components/HotelReview/PriceDetails';
import HotelReviewHeader from './components/HotelReview/HotelReviewHeader';
import ReviewDetails from './components/HotelReview/ReviewDetails';
import ReviewFooter from './components/HotelReview/ReviewFooter';


class HotelReview extends React.Component {

	constructor(props){
		 super(props);
			autobind(this);
		 this.state={interstitial:true};
	 }

	componentDidMount(){
		 setTimeout(function() { this.setState({interstitial: false}); }.bind(this), 2000);
	 }



	render() {
		return (
	 <div className={(this.state.interstitial) ? "interstitial" : ""} >
        <HotelReviewHeader />
				<main>
            <ReviewDetails hotelName={"Hotel the royal plaza center"} hotelAddress={'Ellis Bridge, North Goa'} hotelRoomType={'Business Double Room'} aminityName={'Room only with breakfast'} checkinDate={'16'} checkinMonthYear={'jan 2018'} checkinDay={'Sunday'} checkoutDate={'26'} checkoutMonthYear={'jan 2018'} checkoutDay={'Monday'} nights={" 11 NIGHTS"}  room={'1 Room'}  adults={'4 Adults'} children={'2 Children'}  />
						<ReviewForm heading={"Primary Guest Details"}/>
						<ReviewImportantInfo heading={"Important Information"} cutOffDate={"10th Jan, 2018"} cancellationFee={"₹ 1391.00"} bookingDate={"10th Jan, 2018"} />

						<PriceDetails heading={"Price Details"}/>

				</main>
				<ReviewFooter/>

			</div>
		);
	}
}
export default HotelReview;
