const express = require('express');
const router = express.Router();

// Render Result page
router.get('/result', (req, res) => {
  const user = req.session.user; // <--- Getting user object from session
  res.render('result', user);
});

module.exports = router;
