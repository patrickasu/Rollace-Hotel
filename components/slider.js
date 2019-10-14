import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Slidershow = () => {
	return (
		<div className="main-content">
			<div className="img-area">
				<div className="image-slideshow">
					<Slider
		                dots={false}
		                autoplayspeed={7000}
		                arrows={true}
		                fade={true}
		                speed={2000}
		                infinite={true}
		                cssEase={'ease-in-out'}
		                loop={true}
		                autoplay={true}
						>
						<div className="slide-img">
		                  <img src="https://images.unsplash.com/photo-1563214545-153f72a66f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Four Square Restuarant"/>
			                <div className="slider-text">
			                 <h1>Welcome to</h1>
			                 <h2>Rollace Hotel and luxury</h2>
			                 <span><p>-------- HOME OF THE BEST RESERVATION AND COMFORT --------</p></span>
			                 <Link to="/booking"><button className="booking-btn">Read More <i class="fas fa-long-arrow-alt-right"></i></button></Link>
			                </div>  
		                </div>
		                <div className="slide-img">
		                  <img src="https://github.com/patrickasu/Val-Memoirs/blob/master/welcome.jpg?raw=true" alt="Four Square Restuarant"/>
			                <div className="slider-text">
			                 <h1>Welcome to</h1>
			                 <h2>Rollace Hotel and luxury</h2>
			                 <span><p>-------- HOME OF THE BEST RESERVATION AND COMFORT --------</p></span>
			                 <Link to="/booking"><button className="booking-btn">Read More <i class="fas fa-long-arrow-alt-right"></i></button></Link>
			                </div>  
		                </div>
		                <div className="slide-img">
		                  <img src="https://github.com/patrickasu/Val-Memoirs/blob/master/welcome%202.jpg?raw=true" alt="Four Square Restuarant"/>
			                <div className="slider-text">
			                 <h1>Welcome to</h1>
			                 <h2>Rollace Hotel and luxury</h2>
			                 <span><p>-------- HOME OF THE BEST RESERVATION AND COMFORT --------</p></span>
			                 <Link to="/booking"><button className="booking-btn">Read More <i class="fas fa-long-arrow-alt-right"></i></button></Link>
			                </div>  
		                </div>
	                </Slider>
				</div>
			</div>
		</div>	
	);
}

export default Slidershow;