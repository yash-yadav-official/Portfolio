import log4js from 'log4js';

log4js.configure({
    appenders: { 
      out: { type: 'stdout' }, 
      app: { type: 'file', filename: 'application.log' } 
    },
    categories: { 
      default: { appenders: ['out', 'app'], level: 'debug' } 
    }
  });

export function getLogger() {
    return log4js.getLogger();
}