import React from 'react';
import Rollace from '../rolace.png';

const Icons = (props) => (
	<nav>
		<img className="icon-image" src={Rollace} alt="rollace logo"/>
		<p className="icons-text">Home of the best Reservation</p>
		<ul className="icons-menu">
			<li><i class="fas fa-envelope"> rollace@gmail.com</i></li>
			<li><i class="fas fa-phone">+2348182256433</i></li>
			<li><i class="fab fa-facebook"></i></li>
			<li><i class="fab fa-instagram"></i></li>
			<li><i class="fab fa-twitter"></i></li>
		</ul>
	</nav>
);

export default Icons;