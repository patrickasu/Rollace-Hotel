import React from 'react';
import{ Link } from 'react-router-dom';

const Booking = () => (
	<div className="main-content">
		<div className="music-row">
			<div className="music-col">
				<i class="fab fa-cc-apple-pay">Mobile App</i>
				<p>Best reservations system. 3 months on us. Transform the way you work, learn, play, and connect with almost everything around you.<br/>Start your free tria</p>
				<Link to="ipads" className="music-link">SHOP NOW</Link>
			</div>
			<div className="music-image"></div>
		</div>
	</div>
);

export default Booking;