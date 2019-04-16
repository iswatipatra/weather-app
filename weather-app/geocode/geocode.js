const request = require('request');

var geocodeaddress = (address,callback)=> {

  var s = encodeURIComponent(address);

  request({
    //url:'http://www.mapquestapi.com/geocoding/v1/address?key=2oxoTX2vUiwNKANuCOw9j2jrfLwFTPpp&location=viman%20nagar%20pune',
  url:`http://www.mapquestapi.com/geocoding/v1/address?key=2oxoTX2vUiwNKANuCOw9j2jrfLwFTPpp&location=${s}`,
    json:true
  },(error,response,body) => {

  //console.log(response);
  if(error)
  {
    callback('unable to connect google server');
    //console.log('unable to connect google server');
  }
  else
  {
    callback(undefined,{ //result is object
      lat:body.results[0].locations[0].latLng.lat,
      lng:body.results[0].locations[0].latLng.lng
    });
    //console.log(`address ${body.results[0].locations[0].latLng.lat}`);
    //console.log(`longitude ${body.results[0].locations[0].latLng.lng}`);
  }


  });

};

module.exports.geocodeaddress = geocodeaddress;
