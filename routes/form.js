const express = require('express');
const router = express.Router();

// Render Form page
router.get('/form', (req, res) => {
  res.render('form');
});

// POST request on Form page
router.post('/form', (req, res) => {
  // Setting the unchecked checkbox value to false
  if (!req.body.agree == true) {
    req.body.agree = false;
  }

  const user = {
    username: req.body.username,
    gender: req.body.gender,
    agree: req.body.agree,
    password: req.body.password
  };
  req.app.get('usersList').push(user);
  req.session.user = user; // <--- Attaching user object to session
  res.redirect('result');
});

module.exports = router;
