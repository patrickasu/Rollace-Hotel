import React from 'react';
import Slider from 'react-slick';

const Slidershow = () => {
	return (
		<div className="main-content">
			<div className="carousel-area">
				<div className="carousel-slideshow">
					<Slider
						slidesToShow={1}
						slidesToScroll={1}
						infinite={true}
						loop={true}
						dots={true}
						autoplayspeed={1000}
						arrows={true}
						>
		                <div className="test-section">
		                <h2 className="test-h2">WHAT OUR CUSTOMERS SAYS</h2>
		                	<div className="test-row">
		                		<div className="test-img">
				                	<div className="test-col">
										<div className="test-image1"></div>
										<div className="test-col">
											<i class="fas fa-quote-right"> Our pool and its bar are designed to provide excellent chill times with family and friends. Our pool and its bar are <br/> designed The pool area is also the best ever. are design. The pool area is also the best ever. are design. <i class="fas fa-quote-left"></i></i>
											<p className="quotetext">Daniel Mark</p>
											<span className="quotespan">CEO & Founder - Asiam</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test-section">
		                <h2 className="test-h2">WHAT OUR CUSTOMERS SAYS</h2>
		                	<div className="test-row">
		                		<div className="test-img">
				                	<div className="test-col">
										<div className="test-image2"></div>
										<div className="test-col">
											<i class="fas fa-quote-right"> Our pool and its bar are designed to provide excellent chill times with family and friends. Our pool and its bar are <br/> designed The pool area is also the best ever. are design. The pool area is also the best ever. are design. <i class="fas fa-quote-left"></i></i>
											<p className="quotetext">Kate daniel</p>
											<span className="quotespan">General Manager - Tomita</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="test-section">
		                <h2 className="test-h2">WHAT OUR CUSTOMERS SAYS</h2>
		                	<div className="test-row">
		                		<div className="test-img">
				                	<div className="test-col">
										<div className="test-image3"></div>
										<div className="test-col">
											<i class="fas fa-quote-right"> Our pool and its bar are designed to provide excellent chill times with family and friends. Our pool and its bar are <br/> designed The pool area is also the best ever. are design. The pool area is also the best ever. are design. <i class="fas fa-quote-left"></i></i>
											<p className="quotetext">Max William</p>
											<span className="quotespan">CEO - Bayamis</span>
										</div>
									</div>
								</div>
							</div>
						</div>
	                </Slider>
				</div>
			</div>
		</div>	
	);
}

export default Slidershow;