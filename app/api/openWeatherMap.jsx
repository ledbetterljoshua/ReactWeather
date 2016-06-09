var $http = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3783f9fda0bdc8d8dd9c7f69e0475341&units=imperial';

// api key: 3783f9fda0bdc8d8dd9c7f69e0475341


module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		console.log(requestUrl);

		return $http.get(requestUrl).then(function (res){

			if(res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}

		}, function (res){

			throw new Error(res.data.message);

		});
	}
}