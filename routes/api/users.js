const express = require('express');
const router = express.Router();

// POST request validation function
const requestValidation = obj => {
  const arr = ['username', 'gender', 'agree', 'password'];
  return JSON.stringify(Object.keys(obj)) === JSON.stringify(arr);
};

// Returns the array of users in json format
router.get('/api/users', (req, res) => {
  res.send(JSON.stringify(req.app.get('usersList')));
});

// Accepts user data in following format {username: String, gender:String, agree: Boolean, password: String} and saves to the array
router.post('/api/users', (req, res) => {
  if (requestValidation(req.body)) {
    req.app.get('usersList').push(req.body);
    res.send('Successfully added a user to users array');
  } else {
    res.send(
      'Failed to add a user to users array \n Please use this format: \n {"username":String,"gender":String,"agree":Boolean,"password":String}'
    );
  }
});

module.exports = router;

/*
EXAMPLE:
{
	"username": "Hayk",
	"gender": "male",
	"agree": true,
	"password": "pwd"
}
*/
