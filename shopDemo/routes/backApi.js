var express = require('express');
var router = express.Router();
var commdity = require('./../model/commodity');

/* GET users listing. */
/* /backApi */
router.get('/', function(req, res, next) {
  res.send('backApi');
});

module.exports = router;
