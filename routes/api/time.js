const express = require('express');
const router = express.Router();
const moment = require('moment');

// Returns current time in {time: current_time} format
router.get('/api/time', (req, res) => {
  res.send({ time: moment().toString() });
});

module.exports = router;
