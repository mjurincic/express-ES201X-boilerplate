import address from 'address';
import browserSync from 'browser-sync';
import app from './app';
import config from './config/config';

let localUrlForTerminal = `http://${config.server.host}:${config.server.port}/`;
let lanUrlForTerminal = `http://${config.server.host}:${config.server.port}/`;
// If in local environment override
if (config.server.host === 'localhost' && config.isDevelopment) {
  localUrlForTerminal = `http://${config.server.host}:${config.server.port}/`;
  lanUrlForTerminal = `http://${address.ip()}:${config.server.port}/`;
}
app.listen(config.server.port, () => {
  // If in local environment override
  if (config.isDevelopment) {
    return browserSync({
      files: ['assets/**/*.{html,js,css}', 'views/**/*.{hbs}'],
      online: true,
      open: false,
      port: config.server.port + 1,
      proxy: 'localhost:' + config.server.port,
      ui: false
    });
  }

  // eslint-disable-next-line no-console
  console.log(`Server started:
------------------------------------
    Local: ${localUrlForTerminal}
 External: ${lanUrlForTerminal}
------------------------------------
`);
});
