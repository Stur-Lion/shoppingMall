var express = require('express');
var router = express.Router();

/* GET users listing. */
/* /front */
router.get('/', function(req, res, next) {
  res.send('front');
});

module.exports = router;
