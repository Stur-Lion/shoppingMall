var express = require('express');
var router = express.Router();
var userModel = require('../model/user');
var commdity = require('./../model/commodity');
var EventProxy = require('./../node_modules/eventproxy');
var ep = new EventProxy();

/* GET home page. */
/* /frontApi */
router.post('/', function(req, res, next) {
    commdity.getAllCommdity({type:'carousel'},function(result){
        ep.emit('getcarousel',result)
    })
    commdity.getAllCommdity({type:'navigation'},function(result){
        ep.emit('getnavogation',result)
    })
    ep.all(['getcarousel','getnavogation'],function(res1,res2){
        console.log(1);
        res.json({
            carousellist:res1,
            navogationlist:res2
        })
    })
});

module.exports = router;
