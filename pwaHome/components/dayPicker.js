import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment'
import 'react-day-picker/lib/style.css';
import '../css/dayPickerReset.css';

export default class MMTDatepicker extends React.Component {
 	
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();	
  }
	
	getInitialState() {
	var today = new Date(); 
     
    var tomorrow = new Date(today.getTime() + (1000 * 60 * 60 * 24));
    return {
      from: today,
      to: tomorrow,
	  enteredTo: null, // Keep track of the last day for mouseEnter.	
    };
  }
	
getResetState() {
	  return {
      from: null,
      to:  null,
	  enteredTo: null, // Keep track of the last day for mouseEnter.	
    };
  }
	 
  handleResetClick() {
    this.setState(this.getResetState());
  }

	isSelectingFirstDay(from, to, day) {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }
  handleDayClick(day,{ disabled, selected }) {
    const { from, to } = this.state;
	  const { updateFromDate } = this.props;
	  const { updateToDate } = this.props;
	
    if (disabled) {
      return;
    } 
	  	  
    if (from && to && day >= from && day <= to) {
	  this.handleResetClick();
       this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
		
		
    }
    if (this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        from: day,
        to: null,
        enteredTo: null,
      });
		
		this.props.updateFromDate(day);
		updateFromDate(day);
		
    } 
	else {
		  
	  var dayDiff = Math.ceil((day - from) / (1000 * 60 * 60 * 24)) + 1;
		
	    if (dayDiff > 30)
		{	
		document.getElementById("range_error").style.display = 'block';			
		}
	  
	  else   {
		  
	document.getElementById("range_error").style.display = 'none';		  
      this.setState({
        to: day,
        enteredTo: day,
      });
	}	  
		  
		  
		  
		this.props.updateToDate(day);
	    updateToDate(day);
    }
  }
	
  handleDayMouseEnter(day) {
    const { from, to } = this.state;
    if (!this.isSelectingFirstDay(from, to, day)) {
      this.setState({
        enteredTo: day,
      });
    }
  }
 	
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };	
	  const options = { year: "numeric", month: "short", day: "numeric" };
	const today = new Date();  
	    return (
      <div className="RangeExample">
			
		<div className="dayPickerHeader">							
		<div className="makeFlex appendTop20">
		<div className={(from && !to) ? "dateFiled active" : "dateFiled" }>
		<p className="font12  lightGreyText appendBottom10"> Check-In </p>
		<p className="font20 latoBlack appendBottom8">  {!from && '--'} {from && `${from.toLocaleDateString('en-GB', options)}`} </p>
        </div>
        <div className={(to) ? "dateFiled active" : "dateFiled" }>
		<p className="font12  lightGreyText appendBottom10"> Check-Out </p>
		<p className="font20 latoBlack appendBottom8"> {!to && '--'} {to && `${to.toLocaleDateString('en-GB', options)}`}</p>
        </div>
		</div>
        {from && to && (<button className="link font10 latoBlack" onClick={this.handleResetClick}> CLEAR </button> )}
        </div>
						<p className="animated slideInUp errorBox font12 latoBold textCenter" id="range_error">Stay cannot be greater than 30 days </p>
        <DayPicker           
          className="Selectable" 
          numberOfMonths={12}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}							
          onDayClick={this.handleDayClick}          				
          disabledDays={{ before: today}} 
						
		/>
       
      </div>
    );
  }
}
