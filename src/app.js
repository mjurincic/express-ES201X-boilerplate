import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import hbs from 'hbs';
import layouts from 'handlebars-layouts';

import index from './routes/index';
import about from './routes/about';

const app = express();
app.disable('x-powered-by');

// view engine setup
hbs.registerHelper(layouts(hbs.handlebars));
hbs.registerPartials(path.join(__dirname, '../views/layouts'));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');
app.set('view options', { layout: false });
app.engine('html', hbs.__express);

app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test'
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', index);
app.use('/about', about);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 500).render('pages/error', {
    message: err.message
  });
});

export default app;
