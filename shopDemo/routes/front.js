var express = require('express');
var router = express.Router();
var userModel = require('../model/user');
var commdity = require('./../model/commodity');
var EventProxy = require('./../node_modules/eventproxy');
var ep = new EventProxy();

/* GET users listing. */
/* /front */
router.get('/indexList', function(req, res, next) {
  commdity.getAllCommdity({type:'carousel'},function(result){
    ep.emit('getcarousel',result)
  })
  commdity.getAllCommdity({type:'navigation'},function(result){
    ep.emit('getnavogation',result)
  })
  ep.all(['getcarousel','getnavogation'],function(res1,res2){
    console.log(res2);
    res.render('front/indexList',{
      carousellist:res1,
      navogationlist:res2
    })
  })
});

module.exports = router;
