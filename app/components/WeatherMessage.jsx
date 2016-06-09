let React = require('react');

let WeatherMessage = ({temp, location}) => {
	return(
		<div>
			<h3>It's {temp} in {location}</h3>
		</div>
	);
}

module.exports = WeatherMessage;