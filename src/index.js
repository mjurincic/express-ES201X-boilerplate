import address from 'address';
import app from './app';

const { HOST = '0.0.0.0' } = process.env;
const { PORT = 3000 } = process.env;
let localUrlForTerminal = `http://${HOST}:${PORT}/`;
let lanUrlForTerminal = `http://${HOST}:${PORT}/`;
// If in local environment override
if (HOST === '0.0.0.0' || HOST === '::') {
  localUrlForTerminal = `http://localhost:${PORT}/`;
  lanUrlForTerminal = `http://${address.ip()}:${PORT}/`;
}
app.listen(PORT, () =>
  // eslint-disable-next-line no-console
  console.log(`
Access URLs:
--------------------------------------
Localhost: ${localUrlForTerminal}
      LAN: ${lanUrlForTerminal}
--------------------------------------
Press CTRL-C to stop`)
);
