import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './homepage'
import PageLoader from './components/PageLoader'
import PageError from './components/pageError'
import AccountPage from './accountPage'
import BottomBar from './components/bottomBar'
import OffersPage from './OffersPage.js'
import OtpFlow from './otpFlow.js'
import LoginNow from './components/login/loginNow'
import LoginSignup from './components/loginSignup'
import AccountDetailsEdit from './components/accountDetailsEdit'
import AccountDetails from './components/accountDetails'
import ResetPassword from './components/resetPassword'
import railPnrStatus from './components/railPnrStatus'
import railCoachPosition from './components/railCoachPosition'
import liveTrainStatus from './components/liveTrainStatus'


import Demo from './demo'

class App extends React.Component {
	constructor(props){
	 super(props);
	 this.state={loading:true}
		this.loadingTimer=null;


 }

componentDidMount(){
	 this.loadingTimer = setTimeout(() => {
				 this.setState({loading: false})
	 }, 1500)
 }
 componentWillUnmount() {
		 clearTimeout(this.loadingTimer);
 };

   render() {
      return (

<Router>
  <Switch>
			<Route exact path='/' component={Demo} />
			<Route exact path='/components/loginSignup' component={LoginSignup} />
			<Route exact path='/otpFlow' component={OtpFlow} />
			<Route exact path='/homePage' component={HomePage} />
			<Route exact path='/OffersPage' component={OffersPage} />
			<Route exact path='/components/pageError' component={() => (<PageError errorImg={"../images/pagenotfound.png"} errorName={"Page Not Found"} desp={"We can't seem to find the page you are looking for."}/>)}/>
			<Route exact path='/accountPage' component={() => (<AccountPage heading={"Account"}  name={"Bruce Wayne"} email={"abcd@gmail.com"}/>)}/>
			<Route exact path='/components/accountDetailsEdit' component={AccountDetailsEdit} />
			<Route exact path='/components/accountDetails' component={AccountDetails} />
			<Route exact path='/components/resetPassword' component={ResetPassword} />
			<Route exact path='/railPnrStatus' component={railPnrStatus} />
			<Route exact path='/liveTrainStatus' component={liveTrainStatus} />
			<Route exact path='/railCoachPosition' component={railCoachPosition} />
	</Switch>
</Router>




		  );
   }
}
export default App;
