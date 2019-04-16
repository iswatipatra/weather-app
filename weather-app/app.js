//const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a:{
      demand:true,
      alias:'address',
      describe: 'address to fetch weather for',
      string: true
    }
})
.help()
.alias('help','h')
.argv;
//console.log(argv);
geocode.geocodeaddress(argv.address,(errormessage,results)=> {
  if(errormessage)
  {
    console.log(errormessage);
  }else{
    console.log(JSON.stringify(results,undefined,2));
   //  console.log(results);
  }
});

weather.getweather(18.55679,73.93136,(errormessage,result) => {
  if(errormessage)
  {
    console.log(errormessage);
  }else{
    console.log(JSON.stringify(result,undefined,2));
  }


});

/*var s = encodeURIComponent(argv.a);
request({
  //url:'http://www.mapquestapi.com/geocoding/v1/address?key=2oxoTX2vUiwNKANuCOw9j2jrfLwFTPpp&location=viman%20nagar%20pune',
url:`http://www.mpquestapi.com/geocoding/v1/address?key=2oxoTX2vUiwNKANuCOw9j2jrfLwFTPpp&location=${s}`,
  json:true
},(error,response,body) => {

//console.log(response);
if(error)
{
  console.log('unable to connect google server');
}
else
{
  console.log(`address ${body.results[0].locations[0].latLng.lat}`);
  console.log(`longitude ${body.results[0].locations[0].latLng.lng}`);
}


});*/
