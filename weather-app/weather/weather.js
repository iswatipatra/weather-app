const request = require('request');

var getweather = (lat,lng,callback) =>
{
  request({
  //  url:'https://api.darksky.net/forecast/6681c94fecf2d7a9153892ecf0ae2b12/18.55679,73.93136',
  url: `https:api.darksky.net/forecast/6681c94fecf2d7a9153892ecf0ae2b12/${lat},${lng}`,
    json:true
  },(error,response,body)=> {

        if(error)
        {
          console.log(body.currently[0].temperature[0]);
        }
        /*if(body.code === 400)
        {
          callback('unable to fetch weather');
        }else*/
      /*  {
            callback(undefined,{temperature:body.currently[0].temperature});
        }*/

  });
}


module.exports.getweather = getweather;
