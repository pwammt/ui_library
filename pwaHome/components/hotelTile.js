import React, { Component } from 'react';

class HotelTile extends Component {
  render() {
    return (
		
		<li>
	<div className="recent_searches_tile"> 
<span className="selling_fast_tag orange_bg">Selling Fast</span>
	<span className="rc_hotel_icon sprite">&nbsp;</span>
 <div className="rc_right right_align">
  
  <p className="font_12 make_flex  LatoSemiBold append_bottom4"> <span>Lemon Tree Premi...</span> </p>

  <p className="font_10 grey">28 Mar 17 </p>
  
	</div>
</div>
		</li>
      
    );
  }
}

export default HotelTile;
