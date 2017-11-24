const request = require("request");

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodeAddress = encodeURIComponent(address);

        request({
                url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyCNU3oGsBPdEv-FJiqX4Ey-NoEeo3h23p0`,
                json: true
            },
            (error, responce, body) => {
                if (error) {
                    reject("Unable to connect to Google servers.");
                } else if (body.status === "ZERO_RESULTS") {
                    reject("Unable to find that address.");
                } else if (body.status === "OK") {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    });
                }
                reject("Other error");
            }
        );

    });
};


geocodeAddress('00000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (error) => {
    console.log(error);
});