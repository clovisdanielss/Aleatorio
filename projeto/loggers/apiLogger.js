var winston = require('winston');
require('winston-loggly-bulk');

 
const myCustomLevels={
    levels:{
        info:0,
        debug:1,
        warn:2,
        error:3,
    },
    colors:{
        info: 'blue',
        debug: 'green',
        warn: 'yellow',
        error: 'red'
    }
}

winston.loggers.add('development',{
    console:{
        levels:myCustomLevels,
        colorize:'true',
    }
});
winston.addColors(myCustomLevels);

 winston.add(winston.transports.Loggly, {
    token: "d701a048-41b9-43c8-b24e-8fffc1cb9258",
    subdomain: "graphvs",
    tags: ["Winston-NodeJS"],
    json:true
});


module.exports=winston;