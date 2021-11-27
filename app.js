require('dotenv').config();
const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const PORT = process.env.PORT;

// Express settings
const app = express();
app.set('view engine', 'ejs');

// Static resource routing
app.use(favicon(path.join(__dirname, '/public/favicon.ico')));
app.use('/public', express.static(path.join(__dirname, '/public')));

// Dynamic resource routing
app.use('/', require('./routes/index.js'));

// Execute web application
app.listen(PORT, () => {
  console.log(`Application listening at ${PORT}`);
});
