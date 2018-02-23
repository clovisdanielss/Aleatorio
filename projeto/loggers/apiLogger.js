const winston = require('winston');

 
const myCustomLevels={
    colors:{
        info: 'blue',
        debug: 'green',
        warn: 'yellow',
        error: 'red'
    }
};

const alignedWithColorsAndTime = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
      const {
        timestamp, level, message, ...args
      } = info;

      const ts = timestamp.slice(0, 19).replace('T', ' ');
      return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
    }),
  );

const logger = winston.createLogger({
    format:alignedWithColorsAndTime ,
    transports: [
        new winston.transports.Console()
      ]
});
//usar produção
winston.addColors(myCustomLevels);


module.exports=logger;