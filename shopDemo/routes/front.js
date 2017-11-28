var express = require('express');
var router = express.Router();
var userModel = require('../model/user');

/* GET users listing. */
/* /front */
router.get('/indexList', function(req, res, next) {
  res.render('front/indexList',{

  })
});

module.exports = router;
