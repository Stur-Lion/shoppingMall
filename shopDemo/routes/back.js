var express = require('express');
var router = express.Router();
var userModel = require('../model/user.js');

/* GET users listing. */
/* / */
router.get('/', function(req, res, next) {
  res.send('back')
});

module.exports = router;
