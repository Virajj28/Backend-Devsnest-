var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * @requires { email, firstName, lastName, password, confirmPassword } - req.body
 * @description 
 * Security, Performance and edge cases
 * Level 1
 * Validates the email
 * Validates the password
 * password and confirmPassword match
 * Level 2
 * JS / SQL (JS & SQL INJECTION) -THA
 * Level 3
 * check if email exists 
 * password hash
 * email lowercase nervebody@gmail.com / Nervebody@gmail.com
 * save user to DBS
 */
router.post('/register',)

module.exports = router;
