import address from 'address';
import app from './app';
import config from './config/config';

let localUrlForTerminal = `http://${config.server.host}:${config.server.port}/`;
let lanUrlForTerminal = `http://${config.server.host}:${config.server.port}/`;
// If in local environment override
if (config.server.host === 'localhost' && config.isDevelopment) {
  localUrlForTerminal = `http://${config.server.host}:${config.server.port}/`;
  lanUrlForTerminal = `http://${address.ip()}:${config.server.port}/`;
}
app.listen(config.server.port, () =>
  // eslint-disable-next-line no-console
  console.log(`
Access URLs:
--------------------------------------
Localhost: ${localUrlForTerminal}
      LAN: ${lanUrlForTerminal}
--------------------------------------
Press CTRL-C to stop`)
);
