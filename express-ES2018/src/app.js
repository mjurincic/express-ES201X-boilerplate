import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import handlebars from 'handlebars';
import layouts from 'handlebars-layouts';
import handlebarsWax from 'handlebars-wax';

import routes from './routes';

// Initialize express web app.
const app = express();
// Obscure for security.
app.disable('x-powered-by');

// View engine setup
const wax = handlebarsWax(handlebars)
  .partials('views/layouts/**/*.{hbs,js}')
  .partials('views/partials/**/*.{hbs,js}')
  .helpers(layouts);
app.engine('hbs', wax.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test'
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).render('pages/error', {
    message: err.message
  });
});

export default app;
