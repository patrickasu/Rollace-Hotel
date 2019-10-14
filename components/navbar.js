import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
	<div className="navigation">
		<h1 className="hotel-header">Rollace Hotel and Luxury</h1>
		<ul className="navigation-menu">
			<li><NavLink className="navigation-link" exact to="/">Home</NavLink></li>
			<li><NavLink className="navigation-link" to="/myservices">Services</NavLink></li>
			<li><NavLink className="navigation-link" to="/ourservices">About</NavLink></li>
			<li><NavLink className="navigation-link" to="/contact">Contact us</NavLink></li>
			<li><NavLink className="navigation-link" to="/booking">Where to Buy</NavLink></li><i class="fas fa-shopping-cart"></i>
			<li><NavLink className="navigation-link" to="/mybooking">Online Shop</NavLink></li>
		</ul>
	</div>
);

export default Navbar;