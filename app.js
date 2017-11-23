const yargs = require("yargs");

const geocode = require("./geocode/geocode.js");

const argv = yargs
  .options({
    a: {
      demand: true,
      allias: "address",
      describe: "Address to fetsh weather far",
      string: true
    },
    lat: {

    }
  })
  .help()
  .alias("help", "h").argv;

console.log(argv);

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});


