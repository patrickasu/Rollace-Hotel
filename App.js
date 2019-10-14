import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style/normalize.css';
import './style/mystyle.css';
import Icons from './components/icons';
import Navbar from './components/navbar';
import Slidershow from './components/slider';
import Home from './components/home';
import RoomDetails from './components/roomdetails';
import Wellness from './components/wellness';
import Restaurant from './components/restaurant';
import SpecialOffer from './components/specialoffer';
import About from './components/about';
import Myservices from './components/myservices';
import Contact from './components/contact';
import Booking from './components/booking';
import Googlemap from './components/googlemap';



class App extends Component {
  render() {
    return (
    	<BrowserRouter>
	     <div className="App">
	     	<Icons />
	       <Route path="/" render={()=> <Navbar name="ROLOX HOTEL" />}/>
	       <Slidershow /> 
	       <Route exact path="/" component={Home} />
	       <Route path="/roomdetails" component={RoomDetails} />
	       <Route path="/wellness" component={Wellness} />
	       <Route path="/restaurant" component={Restaurant} />
	       <Route path="/specialoffer" component={SpecialOffer} />
	       <Route path="/about" component={About} />
	       <Route path="/myservices" component={Myservices} />
	       <Route path="/contact" component={Contact} />
	       <Route path="/booking" component={Booking} />
	       <Googlemap />
	     </div>
	    </BrowserRouter>
    );
  }
}

export default App;
