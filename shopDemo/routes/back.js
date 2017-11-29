var express = require('express');
var router = express.Router();
var userModel = require('../model/user.js');

/* GET users listing. */
/* / */
/*主页面 iframe*/
router.get('/index', function(req, res, next) {
  res.render('indexBack',{

  })
});
/*修改轮播图*/
router.get('/changeCarousel', function(req, res, next) {
  res.render('homepage/changeCarousel',{

  })
});

module.exports = router;
