const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const route = require('./routes/index');
const db = require('./config/db');

// Connect database
db.connect();
const app = express(); // Framework
require('./config/db/passport');

// public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }
  ));
app.use(express.json());

app.use(methodOverride('_method'));

// Routes init
route(app);

// Event listen server
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});