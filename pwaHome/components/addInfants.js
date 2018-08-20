import React, { Component } from 'react'; 

import NumericInput from 'react-numeric-input';
class AddInfants  extends Component {
		
	
	
  render() {
	  
	    return (
		<div className="makeFlex hrtlCenter appendBottom24">
						<div className="makeFlex column flexOne">
							<p className="font14 makeFlex end">Children  <span className="font11 paddingL4"> Under 2 yrs</span></p>
						<p className="font11 darkGreyText">on the day of check-in </p>
							</div>
						
						<div className="incDecWrap makeFlex perfectCenter pushRight">
			
						<NumericInput 
						value={ 0 } 
						min={ 0 } 
						max={ 9 } 
						size={ 22 } 
						mobile/>
							
						</div>
						
						
						</div>
      
    );
  }
}

export default AddInfants;
