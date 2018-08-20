import React, { Component } from 'react'; 

import NumericInput from 'react-numeric-input';	
class AddAdults  extends Component {
		
	
	
  render() {
	  
	    return (
			<div className="makeFlex hrtlCenter appendBottom24">
						<div className="makeFlex column flexOne">
							<p className="font14 makeFlex end">Adults  <span className="font11 paddingL4"> 12 yrs & above</span></p>
						<p className="font11 darkGreyText">on the day of check-in</p>
							</div>
			
						<div className="incDecWrap makeFlex perfectCenter pushRight">
			
						<NumericInput
			
						value={ 0 }
						min={ 0 } 
						max={ 9 }
						mobile/>
						</div>
						</div>
      
    );
  }
}

export default AddAdults;
