const initState = {
	rooms: [
		{
			img_src: "https://cdn.pixabay.com/photo/2015/02/25/19/57/rest-649351_960_720.jpg",
			description: "Starting from 35000 per night",
			name: "Rollace Suite",
		},
		{
			img_src: "http://www.agirlsworld.com/wp-content/uploads/2019/10/RCDUBAI_00195_conversion.jpg",
			description: "Starting from N40000 per night",
			name: "Standard Room",
		},
		{
			img_src: "https://www.qe2.com/application/files/1715/2135/6076/Hotel_Suites_Royal2.jpg",
			description: "Starting from 30000 per night",
			name: "Executive Suite",
		},
		{
			img_src: "https://images2.kenwoodtravel.co.uk/thumbs/798x464/images/properties/141/Jumeirah-Beach-Hotel-Ocean-Deluxe.jpg",
			description: "Starting from 40000 per night",
			name: "Premium Suite",
		},
		{
			img_src: "https://cdn.pixabay.com/photo/2014/08/11/21/31/wall-panel-416041_960_720.jpg",
			description: "Starting from 25000 per night",
			name: "Deluxe Room",
		},
		{
			img_src: "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416063_960_720.jpg",
			description: "Starting from 70000 per night",
			name: "Presidential Suite",
		},
	]
}

const roomReducer = (state = initState, action) => {
	return state
}

export default roomReducer;