import React from 'react';
import { Link } from 'react-router-dom';

const RoomSummary = ({room}) => (
	<div className="rooms-row">
		<div className="my-events-image" style={{ backgroundImage: "url(" + room.img_src + ")" }}></div>
		<p className="room-name">{room.name}</p>
		<p className="room-description">{room.description}</p>
		<Link to="/roomdetails" className="view-details">VIEW DETAILS</Link>			
	</div>
);

export default RoomSummary;