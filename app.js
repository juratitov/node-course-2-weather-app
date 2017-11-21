const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyCNU3oGsBPdEv-FJiqX4Ey-NoEeo3h23p0",
    json: true
  }, (error, responce, body) => {
      console.log(JSON.stringify(body, undefined, 2));
  }
);
