import React, { Component } from 'react';
import autoBind from 'react-autobind';


class ActionBtn  extends Component {

	 constructor(props){

		super(props);
			 autoBind(this);
		this.state={loading:false}
		 this.loadingTimer=null;


	}

buttonloader(){
	  this.setState({loading: true})
    this.loadingTimer = setTimeout(() => {
          this.setState({loading: false})
    }, 1500)
  }


  render() {

	    return (
		<div className="widgetField makeFlex column noBdr">
			<a  href="javascript:void(0)" onClick={this.buttonloader} className="primaryBtn backBtn font16 makeFlex perfectCenter latoBlack">{!this.state.loading && <span > {this.props.title} </span>}
			 {this.state.loading && <span className="btnLoader"> </span>}</a>

			</div>

    );
  }
}

export default ActionBtn;
