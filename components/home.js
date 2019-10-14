import React from 'react';
import Services from './services';
import Rooms from './rooms';
import Parallax from './parallax';
import Myarallax from './myparallax';
import Team from './team';
import Carousel from './carousel';



const Home = () => {
	return (
		<React.Fragment>
			<Myarallax />
			<Rooms />
			<Parallax />
			<Team />
			<Services />
			<Carousel />
		</React.Fragment>
	)
}

export default Home;