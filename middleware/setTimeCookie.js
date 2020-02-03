const moment = require('moment');

// Sending a cookie with time

const setTimeCookie = (req, res, next) => {
  const cookie = req.cookies.Time;
  // Check if client has the cookie
  if (cookie === undefined) {
    // Set a new cookie
    res.locals.time = moment().toString(); // <--- Store time property in response local object
    const options = {
      maxAge: 900000, // Cookie will be valid for 15 minutes
      httpOnly: true, // Cookie is sent only over HTTP and cannot be accessed by JavaScript
      secure: false // Security is disabled, but can be enabled in case of having HTTPS connection
    };
    res.cookie('Time', res.locals.time, options);
    console.log('Cookie created successfully!');
  } else {
    console.log('Cookie already exists:', cookie);
  }
  next();
};

module.exports = setTimeCookie;
