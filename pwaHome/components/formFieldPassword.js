import React, { Component } from 'react';
import autoBind from 'react-autobind';
import FormField from './login/formField'
import '../css/loginSignup.css';



class FormFieldPassword extends Component {
  constructor(props){
      super(props);
      autoBind(this);
     this.state={visibility:false}
  }

  passwordVisibility()
  {
        this.setState({visibility:!this.state.visibility})

   }
  render() {

	    return (

        <div className=" makeFlex column formField appendBottom24">
            <label className="latoBold font12 flexOne lightGreyText">{this.props.label} </label>
            <input className="font16 latoBold" type={this.state.visibility? "text":"password"} placeholder={this.props.placeholder}/>
            <p className="errorText font12 redText">{this.props.error}</p>
            <span onClick={this.passwordVisibility}  className={this.state.visibility ? "iconVisible homeSprite active":"iconVisible homeSprite"}> </span>
       </div>

    );
  }
}

export default FormFieldPassword;
