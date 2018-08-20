import React, { Component } from 'react'; 
import AddAdults from './addAdults';
import AddChildren from './addChildren';
import SelectChildAge from './selectChildAge';

import NumericInput from 'react-numeric-input';
class AddRoom  extends Component {
		
	
	
  render() {
	  
	    return (
		<div className="room appendBottom10 paddingLR20">				
								
					<AddAdults/>
					<AddChildren/>
					<SelectChildAge/>					
					</div>
      
    );
  }
}

export default AddRoom;
