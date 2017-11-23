const request = require("request");

var geocodeAddress = (address, callback) => {
  var encodeAddress = encodeURIComponent(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyCNU3oGsBPdEv-FJiqX4Ey-NoEeo3h23p0`,
      json: true
    },
    (error, responce, body) => {
      if (error) {
        callback("Unable to connect to Google servers.");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find that address.");
      } else if (body.status === "OK") {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
      } else {
        callback("Other error");
      }
    }
  );

};

var geocodeLatLng = (lat, lng) => {
  geocodeRequest(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCNU3oGsBPdEv-FJiqX4Ey-NoEeo3h23p0`
  );
};

var geocodeRequest = url => {
  request(
    {
      url: url, //`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyCNU3oGsBPdEv-FJiqX4Ey-NoEeo3h23p0`,
      json: true
    },
    (error, responce, body) => {
      if (error) {
        console.log("Unable to connect to Google servers.");
      } else if (body.status === "ZERO_RESULTS") {
        console.log("Unable to find that address.");
      } else if (body.status === "OK") {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Location: ${body.results[0].geometry.location.lat}`);
        console.log(`Location: ${body.results[0].geometry.location.lng}`);
      } else {
        console.log("Other error");
      }
    }
  );
};

module.exports = {
  geocodeAddress,
  geocodeLatLng
};
