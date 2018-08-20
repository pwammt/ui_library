import React, { Component } from 'react';
import AddRoom from './addRoom';
import autoBind from 'react-autobind';

class Rooms extends React.Component {
	constructor(){
		super();
		 autoBind(this);
  this.state = {
    numRooms: 1
  }}



	onAddChild () {
    this.setState({
      numRooms: this.state.numRooms + 1


    });
		this.props.setRoomCount(this.state.numRooms + 1);
  }


  render () {
    const children = [];

    for (var i = 0;  i < this.state.numRooms; i += 1) {
      children.push(<ChildComponent key={i} number={i+1} />);
    };

    return (
      <ParentComponent addChild={this.onAddChild}>
        {children}
      </ParentComponent>
    );
  }


}

const ParentComponent = props => (
  <div className="rooms">
      {props.children}

	<p className="textCenter"><a className="deepskyBlueText latoBold" href="javascript:void(0)" onClick={props.addChild}>+ ADD ANOTHER ROOM</a></p>

  </div>
);

const ChildComponent = props => <div className="roomAdded appendBottom10 animated slideUpEffect">
	  <p className="font12 makeFlex hrtlCenter paddingLR20 paddingT16 appendBottom16"> {"ROOM " + props.number} <span className="pushRight font10 removeRoom">REMOVE</span> </p>
		  <p className="font20 darkGreyText paddingLR20 appendBottom16 adultShort"><span className="blackText">02</span> Adults  <span className="paddingLR20  highlighted">02</span> Children</p>
<AddRoom/>
</div>;

export default Rooms;
