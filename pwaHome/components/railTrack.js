import React, { Component } from 'react';
import autoBind from 'react-autobind';
import Aux from './Aux'; 
import RAIL_STATUS from './railStatus.json';








class RailTrack extends Component {

  constructor(props){
    super(props);
    autoBind(this);
  }





  render() {
    console.log(RAIL_STATUS);
    return (

	<div className="trackWrapper">


          { 
            RAIL_STATUS.map((item) => (
              
              <Aux key={item.id}>
                <p className={`dateTagRow stationGap ${item.railTravelClass}`}> <span className="dateTag latoBold">{item.date}</span></p>
                { 
                  item.railStatus.map((railItem) => {
                    const {railTravelClass, stationCode,distance,cityName,platformNo,journeyStatus,est,dep,schd } = railItem;
                    return(
                        <div key={railItem.id} className={`stationRow font12 ${railItem.railTravelClass} `}>
                        <div className="stationLeft">
                        {railItem.railTravelClass=="currentLocation" && <span className="homeSprite railLocationIcon"> nbsp;</span> }
                          
                          <p className="latoBlack blackText appendBottom8">{stationCode}</p>
                          <p>{distance} km</p>
                        </div>
                        <div className="stationRight">
                          <p className="stationCityName latoBlack blackText appendBottom8">{cityName}</p>
                          {railItem.railTravelClass=="currentLocation" &&  (
                            <Aux>
                            <p className="appendBottom4">No Stop</p> 
                            <p className="latoBold redText appendBottom4">Delay 2m</p>
                            </Aux>
                            ) 
                          }
                          
                          <p className="appendBottom8"><span>Platform <span className="latoBlack">{platformNo}</span> </span> | <span>{journeyStatus}</span> </p>
                          <p className="appendBottom8"> <span className="latoBlack greenText">Est. ARR. {est}</span> | <span>Schd. {schd}</span></p>
                        
                     
                         {railItem.railTravelClass=="railPassed railLate" && <p className="departText"> <span className="latoBlack">DEP. {est}</span> | <span>Schd. {schd}</span></p>}

                         {railItem.railTravelClass=="cancelPart" && <p className="redText latoBold"> The train is cancelled between Tundla Junction & Kanpur Central. It will start from Kanpur Central. </p>} 
                         {railItem.railTravelClass=="divertedPart" && <p className="yellowText latoBold"> The train has been diverted from normal route between Tundla Jn and Kanpur Central</p>} 

                        </div>
                      </div>
                    )
                  })
               
                }
              </Aux>

            ))
                

          } 






  </div>


    );
  }

}

export default RailTrack;
