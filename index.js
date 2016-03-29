 require('dotenv').load()

var client = require('redis').createClient(6379, process.env.hidden , {no_ready_check: true});





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