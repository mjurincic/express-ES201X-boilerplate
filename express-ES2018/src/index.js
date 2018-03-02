import config from './config';
import app from './app';

const { server: { port } } = config;
app.listen(port, () => console.log(`Listening on port ${port}`)); // eslint-disable-line no-console
