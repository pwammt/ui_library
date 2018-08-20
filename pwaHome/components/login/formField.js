import React, { Component } from 'react';


class FormField extends Component {

  render() {
    return (

  		<div className="paddingT16 paddingLR16 makeFlex column formField appendBottom10">
  		<label className="latoBold font12 flexOne lightGreyText">{this.props.labelText} <span className="labelInstruction">{this.props.instruction}</span></label>
  		<input className="font16 latoBold appendBottom4" type="text" placeholder={this.props.placeholder}/>
  		<p className="errorText font12 redText">{this.props.errorText}</p>

  		</div>



    );
  }

}

export default FormField;
