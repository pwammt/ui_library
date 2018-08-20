import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../css/accountDetails.css';


class AccountDetailsEdit extends Component {
  constructor(props){
    super(props);
    autoBind(this);
     this.state={anniversary:false,testDate:"2018-01-05"}
 }
 showAnniversary()
 {
   var marStatus = document.getElementById("maritalStatus").value;

    if(marStatus=="Married")
      {
        this.setState({anniversary:true})
      }
    else
     {
      this.setState({anniversary:false})
     }


 }
 datechange(e)
 {
     this.setState({testDate:e.target.value})
 }

 test()
 {
document.getElementById('birthday').value="2018-01-01"
 }
  render() {
if(document.getElementById('birthday'))
{
console.log(132);
    this.test();
  }
  return (
<div className="accountDetailsWrapper">
    <div className="bdrBottom2 accountHeader makeFlex font16 latoBold blackText">
<span className="homeSprite backIcon ">&nbsp;</span>
    Account Details
    </div>

    <div className="boxPadding">
        <div className="  makeFlex column formField appendBottom24">
            <label className="latoBold font12 flexOne lightGreyText">FIRSTNAME</label>
            <input className="font16 latoBold appendBottom4" type="text" />
            <p className="errorText font12 redText"></p>
        </div>
        <div className="  makeFlex column   formField appendBottom24">
            <label className="latoBold font12 flexOne lightGreyText">LASTNAME</label>
            <input className="font16 latoBold appendBottom4" type="text" />
            <p className="errorText font12 redText"></p>
        </div>
       <div>
          <div className="makeFlex appendBottom32 column">
            <label className="latoBold font12 flexOne lightGreyText appendBottom6">GENDER</label>
             <div>

              <span className="genderOption">
                <input type="radio" name="gender" checked="checked"/>
                <span className="genderChoice appendRight12 active">
                     <span className="tickOuter">
                          <span className="checkMark"> </span>
                     </span>
                      MALE
                </span>

              </span>
                <span className="genderOption">
                <input type="radio" name="gender"/>
                <span className="genderChoice">
                    <span className="tickOuter">
                            <span className="checkMark"> </span>
                    </span>
                      FEMALE
                </span>


                </span>
              </div>

          </div>

       </div>

       <div className="makeFlex column  formField appendBottom24  ">
            <label className="latoBold font12 flexOne lightGreyText">EMAIL</label>
            <input className="font16 latoBold appendBottom4" type="email" />
            <p className="errorText font12 redText"></p>
        </div>

        <div className="makeFlex column  formField appendBottom24  ">
            <label className="latoBold font12 flexOne lightGreyText">MOBILE NUMBER</label>
            <input className="font16 latoBold appendBottom4" type="number" />
            <p className="errorText font12 redText"></p>
        </div>

        <div className="makeFlex column  formField appendBottom24 selectInput  ">
                <label className="latoBold font12 flexOne lightGreyText">MARITAL STATUS</label>

            <select id="maritalStatus" className="font16 latoBold" onChange={this.showAnniversary}>
                <option value="Single">Single</option>
                <option value="Married">Married</option>

            </select>
            <p className="errorText font12 redText"></p>
        </div>

        <div className={this.state.anniversary ? "makeFlex column  formField appendBottom24 selectInput":"hide "}>
          <label className="latoBold font12 flexOne lightGreyText">ANNIVERSARY</label>
          <input className="font16 latoBold appendBottom4" type="date" />
          <p className="errorText font12 redText"></p>
        </div>

        <div className="makeFlex column  formField appendBottom40 selectInput ">
          <label className="latoBold font12 flexOne lightGreyText">BIRTHDAY</label>
          <input onChange={this.datechange}  id="birthday" type="date" className="font16 latoBold appendBottom4" value={this.state.testDate}  max="2018-07-28"  />

          <p className="errorText font12 redText"></p>
        </div>
        <p className="textCenter">
            <a className="secondaryBtn latoBlack font16" href="javascript:void(0)">SAVE</a>
        </p>

   </div>

</div>

    );
  }
}

export default AccountDetailsEdit;
