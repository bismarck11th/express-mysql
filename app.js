const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.set('view engine', 'ejs');

app.use('/', require('./routes/index.js'));

app.listen(PORT, () => {
  console.log(`Application listening at ${PORT}`);
});
