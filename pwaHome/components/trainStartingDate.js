import React, { Component } from 'react';
import autoBind from 'react-autobind';
 
class TrainStartingDate extends Component {
 
    constructor(props) {
      super(props);
      autoBind(this);
      this.state = {
        error: true,
        overlay: false,
        trayStatus: 'close',
        startingName: 'Starting',
        selectedTimings: 'Today, 30 JUL 18',
        data: ['Day Before, 28 JUL 18', 'Yesterday, 29 JUL 18', 'Today, 30 JUL 18', 'Tomorrow, 31 JUL 18'],
        errorText: 'The train is cancelled between Panki Junction & Kanpur Central. It will start from Kanpur Central.'
      }
    }
 
    componentDidMount() {
      // make request to fetch data and error text
    }
 
    toggleTimingsTray(evt) {
      evt.stopPropagation();
      //this.overlayToggle();
      if(this.state.trayStatus === 'open') {
        this.setState({
          startingName: 'Starting',
          trayStatus: 'close',
        });
      } else {
        this.setState({
          startingName: 'Train Start Date',
          trayStatus: 'open'
        });
      }
    }
 
    // use this to close component present in an overlay
    closeOverlay() {
      this.overlayToggle();
      this.setState({
        startingName: 'Starting',
        trayStatus: 'close'
      });
    }
 
    clickOnTime(id) {
      //this.overlayToggle();
      this.setState({
        startingName: 'Starting',
        selectedTimings: this.state.data[id],
        trayStatus: 'close'
      });
    }
 
    // use overlayToggle if you use body for developing overlay
    overlayToggle() {
      if(!this.state.overlay) {
        document.body.style.overflow = "hidden";
      }
      else{
        document.body.style.overflow = "visible";
      }
      this.setState({
        overlay: !this.state.overlay
      });
    }
 
    render() {
 
      const curtainDown = this.state.trayStatus === 'open' ? 'curtainDown' : '';
 
      return (
       
       
        <div className={`trainStartWrapper font14`} onClick={this.closeOverlay}>
          <div className={`trainStartDateCard ${curtainDown}`}>
            <p className="makeFlex trainStart" onClick={this.toggleTimingsTray}>
              <span className="sgiGray"> {this.state.startingName} </span>
              <span className="latoBold pushRight deepskyBlueText makeFlex hrtlCenter">
                  {this.state.selectedTimings}
                <span className="homeSprite arrowUpIcon appendLeft8"></span>
              </span>
            </p>
            {
              <ul className={`trainStartDetail makeFlex ${curtainDown}`}>
                <li className="trainStartDetailOption" value={this.state.data[0]} onClick={this.clickOnTime.bind(this, 0)}>
                  <p className="latoBold font16"> Day Before Yesterday </p>
                  <p className="dustyGray font14"> Friday, 28 Jul 18 </p>
                </li>
                <li className="trainStartDetailOption" value={this.state.data[1]} onClick={this.clickOnTime.bind(this, 1)}>
                  <p className="latoBold font16"> Yesterday </p>
                  <p className="dustyGray font14"> Saturday, 29 Jul 18 </p>
                </li>
                <li className="trainStartDetailOption" value={this.state.data[2]} onClick={this.clickOnTime.bind(this, 2)}>
                  <p className="latoBold font16"> Today </p>
                  <p className="dustyGray font14"> Sunday, 30 Jul 18 </p>
                </li>
                <li className="trainStartDetailOption" value={this.state.data[3]} onClick={this.clickOnTime.bind(this, 3)}>
                  <p className="latoBold font16"> Tomorrow </p>
                  <p className="dustyGray font14"> Monday, 31 Jul 18 </p>
                </li>
              </ul>
            }
            {
              this.state.error &&
              <p className="trainStartInfo redBg whiteText font12">
                  {this.state.errorText}
              </p>
            }
            {/* update class and message based on condition */}
            {
              <p className="trainStartInfo yellowBg whiteText font12">
                The train has been divertedfrom normal route between Tundla Jn and Kanpur Central.
              </p>
            }
          </div>
        </div>
 
      );
    }
  }
 
  export default TrainStartingDate;