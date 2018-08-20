import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../css/accountDetails.css';


class AccountDetails extends Component {
  constructor(props){
    super(props);
    autoBind(this);
     this.state={anniversary:false}
 }

 maritalStatus()
 {

   let marStatus = document.getElementById("maritalStatusAdd");
   if(marStatus.value=="Select")
      {
        marStatus.classList.add('textBlue');
      }
    else
     {
      marStatus.classList.remove('textBlue');
     }
  }
 addDate(element)
 {
       document.getElementById(element).nextSibling.click();
 }
 dateAdded(element)
 {
     document.getElementById(element).classList.add('hide');
     document.getElementById(element).nextSibling.classList.add('active');
 }


  render() {

	    return (
<div className="accountDetailsPage">
    <div className="bdrBottom2 accountHeader makeFlex font16 latoBold blackText">
<span className="homeSprite backIcon ">&nbsp;</span>
    Account Details
    <a className="pushRight font12 latoBold">Edit Details </a>
    </div>
    <div className="boxPadding bdrBottom2">
          <div className="makeFlex appendBottom32">
                <div className="pushLeft flexOne">
                  <p className="appendBottom2 font12">FIRSTNAME </p>
                  <p className="latoBlack font16">Sherlock </p>
                </div>
                <div className="pushRight flexOne">
                    <p className="appendBottom2 font12">LASTNAME </p>
                  <p className="latoBlack font16">Holmes </p>
               </div>
          </div>

          <div className="makeFlex ">
                <div className="pushLeft flexOne">
                  <p className="appendBottom2 font12">GENDER </p>
                  <p className="latoBlack font16">Male</p>
                </div>
                <div className="pushRight flexOne">
                  <p className="appendBottom2 font12">MARITAL STATUS </p>
                  <p className="latoBlack font16">

                      <select onChange={this.maritalStatus} id="maritalStatusAdd" className="font16 latoBold textBlue" >
                          <option value="Single">SELECT</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>

                      </select>


                  </p>
               </div>
          </div>

    </div>

    <div className="boxPadding bdrBottom2">
          <div className="appendBottom32">
            <p className="appendBottom2 font12">EMAIL </p>
            <p className="latoBlack font16">loremipsum@gmail.com</p>
          </div>

            <div>
                <p className="appendBottom2 font12">MOBILE NUMBER </p>
                <p className="latoBlack font16 makeFlex">
                    <span className="pushLeft">+91 9876543211</span>
                    <span className="redText pushRight font12 latoBold appendTop4">

                           Tap to Verify
  <span className="homeSprite verifyErrorIcon"></span>


                    </span>
                </p>
            </div>
    </div>

    <div className="boxPadding makeFlex">

          <div className="pushLeft flexOne">
            <p className="appendBottom2 font12">BIRTHDAY</p>
            <p className="makeRelative">
              <a  className="latoBlack font16" id="addBirthday" href="javascript:void(0)" onClick={()=> this.addDate("addBirthday")}>ADD</a>

              <input  type="date" className="dateInput " onChange={()=> this.dateAdded("addBirthday")}/>
            </p>
          </div>
          <div className="pushRight flexOne">
            <p className="appendBottom2 font12">ANNIVERSARY</p>
            <p className=" makeRelative">
              <a className="latoBlack font16" id="addAnniversary" href="javascript:void(0)" onClick={()=> this.addDate("addAnniversary")}>ADD</a>

              <input  type="date" className="dateInput " onChange={()=> this.dateAdded("addAnniversary")}/>
            </p>
         </div>



    </div>


</div>

    );
  }
}

export default AccountDetails;
