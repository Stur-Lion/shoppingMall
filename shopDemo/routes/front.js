var express = require('express');
var router = express.Router();
var userModel = require('../model/user');
var commdity = require('./../model/commodity');

/* GET users listing. */
/* /front */
router.get('/indexList', function(req, res, next) {
  commdity.getAllCommdity(function(result){
    res.render('front/indexList',{
      list:result
    })
  })
});

module.exports = router;
