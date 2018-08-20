import React, { Component } from 'react';
import ActionBtn from './actionBtn';
import autoBind from 'react-autobind';
import '../css/widget.css';
import '../css/rail.css';

class RailPnrWidget extends Component {

	constructor(props){
		super(props);
		autoBind(this);
		
	}

	

render() {


	    return (

//Widget Wrapper
<div className="appendBottom20">

	<form>
		<div className=" makeFlex column formField appendBottom20 errorField">
			<label className="latoBold font12 flexOne lightGreyText">PNR NUMBER 
			</label>
			<span className="iconCross homeSprite crossPosition">&nbsp; </span>
			<input className="font16 latoBold appendBottom4" type="text"  placeholder="Enter 10 digit PNR number "/>
			
			<p className="errorText font12 redText">Please enter valid 10 digit PNR number</p>

  		</div>
		<ActionBtn title={"CHECK PNR STATUS"}/>

	</form>
</div>
    );
  }
}

export default RailPnrWidget;
