import React, { Component } from 'react';
import SelectCity from './selectCity';
import SelectDate from './selectDateFlight';
import SelectTravellers from './selectTravellers';
import ActionBtn from './actionBtn';
import autoBind from 'react-autobind';
import '../css/widget.css';

class FlightWidget extends Component {

	constructor(props){
		super(props);
		autoBind(this);
    this.state={returnOption:false}


	}

	returnToggle()
	{
		  this.setState({returnOption: !this.state.returnOption})
	}

render() {


	    return (

//Widget Wrapper
<div className="widgetWrap makeFlex column boxPadding flightWidget">
	<form>
		<h1> Best Flight BOOKing Experience</h1>
		<div className="makeFlex bdrBottom1 appendBottom20">
			<div className="flexOne">
				<SelectCity label={"FROM"}/>
			</div>
			<div className="flexOne">
				<SelectCity label={"TO"}/>
			</div>
		</div>
		<div className="makeFlex bdrBottom1 appendBottom20 paddingB16">
			<div className="flexOne ">
				<SelectDate label={"Departure"}/>
			</div>
			<div className="flexOne makeRelative widgetReturn">
				{!this.state.returnOption && <SelectDate label={"RETURN"}/>}
				{this.state.returnOption&&	<div className="optionReturn" onClick={this.returnToggle}>
				<p className="appendBottom4">RETURN</p>
				Book round trip
				for great savings

			</div>}
			{!this.state.returnOption &&		<span className="iconCross homeSprite" onClick={this.returnToggle}> </span>}
		  </div>


		</div>
		<SelectTravellers label={"Travellers & Class"}/>
		<ActionBtn title={"Search Flights"}/>

	</form>
</div>
    );
  }
}

export default FlightWidget;
