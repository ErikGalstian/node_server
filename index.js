//---------------BASIC SETUP----------------
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const users = require('./routes/api/users');
const time = require('./routes/api/time');
const home = require('./routes/home');
const form = require('./routes/form');
const result = require('./routes/result');

// Init express
const app = express();

// Port
const PORT = 4000;

// Listen on a port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Setting up global usersList array
const usersList = [];
app.set('usersList', usersList);

// Setting up the PUG engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//---------------MIDDLEWARES----------------

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(
  session({
    secret: '343ji43j4n3jn4jk3n'
  })
);

//---------------ROUTES----------------

// Homepage
app.use(home);

// Form page
app.use(form);

// Result page
app.use(result);

//---------------API endpoints----------------

// api/users
app.use(users);

// api/time
app.use(time);
