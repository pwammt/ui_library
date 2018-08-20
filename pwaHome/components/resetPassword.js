import React, { Component } from 'react';
import FormField from './login/formField'
import FormFieldPassword from './formFieldPassword'
import '../css/loginSignup.css';



class ResetPassword extends Component {
  render() {

	    return (

     <div className="resetPasswordPage ">

     <div className="bdrBottom2 passwordHeader  makeFlex font16 latoBold blackText">
 <span className="homeSprite backIcon ">&nbsp;</span>
     Change Password

     </div>

     <div className="boxPadding">
         <form className="appendBottom32">
          <FormFieldPassword label={"OLD PASSWORD"} placeholder={"ENTER YOUR OLD PASSWORD"} error={"Wrong Password"}/>
          <FormFieldPassword label={"NEW PASSWORD "} placeholder={"ENTER YOUR NEWPASSWORD"} error={""}/>
          <FormFieldPassword label={"CONFIRM NEW PASSWORD "} placeholder={"ENTER YOUR NEWPASSWORD"} error={""}/>
        </form>


        <p className="appendBottom32 ">
            <a className="latoBold">Forgot Password?</a>
        </p>

        <p className="textCenter">
              <a className="secondaryBtn latoBlack disabled font16">SAVE</a>
        </p>
        </div>

    </div>

    );
  }
}

export default ResetPassword;
