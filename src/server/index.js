const cluster = require('express-cluster');
try {
  require('fs').mkdirSync('./log');
} catch (e) {
  if (e.code !== 'EEXIST') {
    console.error('Could not set up log directory, error was: ', e);
    process.exit(1);
  }
}

const log = require('log4js').configure('./config/logger.json');
const logger = log.getLogger('startup');

cluster(function () {
  const app = require('./app');
  app.set('port', process.env.PORT || 3100);
  const server = app.listen(app.get('port'), function () {
    logger.info('Express server listening on port ', server.address().port, ' with pid ', process.pid);
  });
});
