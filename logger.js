const winston = require('winston');

const alignColorsAndTime = winston.format.combine(
    winston.format.colorize({
        all:true
    }),
    winston.format.label({
        label:'[LOGGER]'
    }),
    winston.format.timestamp({
        format:"YY-MM-DD HH:MM:SS"
    }),
    winston.format.printf(
        info => ` ${info.label}  ${info.timestamp}  ${info.level} : ${info.message}`
    )
);

const getLogger = (service = 'vault') => {
    return  winston.createLogger({
        level: 'debug',
        defaultMeta: { service: service },
        transports: [
            new (winston.transports.Console)({
                format: winston.format.combine(winston.format.colorize(), alignColorsAndTime)
            })
        ],
        exitOnError: false, // do not exit on handled exceptions
    });
};

module.exports = {getLogger};

