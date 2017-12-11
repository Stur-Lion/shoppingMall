var express = require('express');
var router = express.Router();
var userModel = require('../model/user.js');
var commdity = require('./../model/commodity');

/* GET users listing. */
/* / */
/*主页面 iframe*/
router.get('/index', function(req, res, next) {
  res.render('indexBack',{

  })
});
/*修改轮播图*/
router.get('/changeCarousel', function(req, res, next) {
  commdity.getAllCommdity({type:'carousel'},function(result){
    res.render('homepage/changeCarousel',{
      list:result
    })
  })
});

router.get('/changeNavigation', function(req, res, next) {
  commdity.getAllCommdity({type:'navigation'},function(result){
    res.render('homepage/changeNavigation',{
      list:result
    })
  })
});

module.exports = router;
