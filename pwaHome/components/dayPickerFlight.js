import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
//import moment from 'moment'
import 'react-day-picker/lib/style.css';
import '../css/dayPickerReset.css';

const flight_price = {
1: ['3000'],
2: ['5000'],
3: ['3000'],
4:['3000'],
5:['3000'],
6:['3000'],
7:['3000'],
8:['3000'],
9: ['3000'],
10: ['5000'],
11: ['3000'],
12:['3000'],
13:['3000'],
14:['3000'],
15:['3000'],
16:['3000'],
17: ['3000'],
18: ['5000'],
19: ['3000'],
20:['3000'],
21:['3000'],
22:['3000'],
23:['3000'],
24:['3000'],
25: ['3000'],
26: ['5000'],
27: ['3000'],
28:['3000'],
29:['3000'],
30:['3000'],
31:['3000'],

};



export default class MMTDatepicker extends React.Component {

  constructor(props) {
    super(props);
    this.check = 0;
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
    this.renderDay =this.renderDay.bind(this);
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
  renderDay(day) {
   this.check=this.check+1;
   const date = day.getDate();
 const dateStyle = {
     bottom: 0,
     right: 0,
   };
   const flight_priceStyle = { fontSize: '0.8em', textAlign: 'left' };
   const cellStyle = {
     position: 'relative',
   };
   console.log(date);
   return (
     <div style={cellStyle}>
       <div  style={dateStyle}>{date}</div>

 {flight_price[date] && ( this.check < 111) && <div className="dayPrice" style={flight_priceStyle}>{flight_price[date]}</div>}
     </div>
   );
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
		<div className={(from && !to) ? "dateFiled active" : "dateFiled active" }>
		<p className="font12  lightGreyText appendBottom10"> Departure </p>
		<p className="font20 latoBlack appendBottom8">  {!from && '--'} {from && `${from.toLocaleDateString('en-GB', options)}`} </p>
        </div>
        <div className={(to) ? "dateFiled " : "dateFiled" }>
        <span className="iconCross homeSprite"> </span>
		<p className="font12  lightGreyText appendBottom10"> Return </p>
		<p className="font20 latoBlack appendBottom8 hide"> {!to && ''} {to && `${to.toLocaleDateString('en-GB', options)}`}</p>
    <p className="font12 returnTooltip">Book round trip for great savings </p>
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
             renderDay={this.renderDay}

		/>

      </div>
    );
  }
}
