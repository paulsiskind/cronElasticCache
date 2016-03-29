
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var client = require('twilio')('ACfaf79b76b061e7ce2b3f2e1f72e39c40', 'd96eba7984e9603ee730310dd98be7df');
// var moment = require('moment-timezone');
// var	nodemailer = require('nodemailer');
// var amatisApiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjaWQiOjMwLCJ1aWQiOjE0OTAsImp0aSI6IjMyNzJlZWE2MzY4YTM5Zjg0NzA1NjljZGRkZDg2MWMyYzRmN2UyNTZhNTMxNWI1Y2NjMGI1ZDM3YjE0YTE3MTIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE0NTQ1MzU1MDF9.5eObugoV_i8yHf1BIXcjXAtgLbC4vMEQ9LJCJrA4gDA';
var redis = require('redis');
var client = redis.createClient(); //creates a new client

// process.env.TZ = 'America/Denver';




exports.handler = function(event, context) {
	  console.log(Date()); 

	  // client.on('connect', function() {
   //       console.log('connected');
   //  });

    
    client.incr('key2', function(err, reply) {
        console.log("This is the "+ reply + "th iteration"); // 11
    });


	  function foo(){context.succeed(event.key1)};
	  setTimeout(foo, 2000)
}