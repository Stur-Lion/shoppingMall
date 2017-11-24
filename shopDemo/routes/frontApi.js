var express = require('express');
var router = express.Router();

/* GET home page. */
/* /frontApi */
router.get('/', function(req, res, next) {
  res.send('frontApi');
});

module.exports = router;
