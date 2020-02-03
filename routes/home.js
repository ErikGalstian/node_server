const express = require('express');
const router = express.Router();
const setTimeCookie = require('../middleware/setTimeCookie');

// setTimeCookie Middleware
router.use(setTimeCookie);

// Render homepage with current time from Time cookie. If Time cookie does not exist it will render time from res.locals.time variable until a cookie is set.
router.get('/', setTimeCookie, (req, res) => {
  res.render('home', { time: req.cookies.Time || res.locals.time });
});

module.exports = router;
