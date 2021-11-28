require('dotenv').config();
const path = require('path');
const logger = require('./lib/log/logger.js');
const accesslogger = require('./lib/log/accesslogger');
const applicationLogger = require('./lib/log/applicationlogger');
const express = require('express');
const favicon = require('serve-favicon');
const PORT = process.env.PORT;

const app = express();

// Express settings
app.set('view engine', 'ejs');
app.disable('x-powered-by');

// Static resource routing
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use('/public', express.static(path.join(__dirname, '/public')));

// Set access log
app.use(accesslogger());

// Dynamic resource routing
app.use('/', require('./routes/index.js'));

// Set application logger
app.set(applicationLogger());

// Execute web application
app.listen(PORT, () => {
  logger.application.info(`Application listening at ${PORT}`);
});
