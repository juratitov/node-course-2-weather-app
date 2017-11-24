const request = require('request');

var getWeather = (lat, lng, collback) => {
    request({
        url: `https://api.darksky.net/forecast/4bcd588d5c2b684ee627704725f90262/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error) {
            collback('Unable to connect to Forecast.io server.');
        } else if(response.statusCode === 400) {
            collback('Unable to fetch weather.');
        } else if(response.statusCode === 200) { 
            collback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
            });
        }
    });
};


module.exports.getWeather = getWeather;