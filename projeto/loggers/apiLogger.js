var winston = require('winston');
require('winston-loggly-bulk');
 
 winston.add(winston.transports.Loggly, {
    token: "d701a048-41b9-43c8-b24e-8fffc1cb9258",
    subdomain: "graphvs",
    tags: ["Winston-NodeJS"],
    json:true
});


module.exports=winston;