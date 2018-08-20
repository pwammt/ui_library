import React, { Component } from 'react';
import autoBind from 'react-autobind';
import RailNav from './railNav'
import RailPnrWidget from './railPnrWidget' 
import RailLiveStatusWidget from './railLiveStatusWidget'
import '../css/widget.css';
import '../css/rail.css';

class RailWidget extends Component {

	constructor(props){
		super(props);
		autoBind(this);

		this.state = { 
			tab:1
		}
		
	}
	railNav(index){
		this.setState({
			tab:index

		})

	
	}


	

render() {

	const tabWidget = [ <RailPnrWidget />, <RailLiveStatusWidget/>];

	    return (
				<div className="widgetWrap makeFlex column boxPadding">
					<RailNav railNavTab={this.railNav} selected={this.state.tab}/>
					{tabWidget[this.state.tab]}
				</div>
    );
  }
}

export default RailWidget;
