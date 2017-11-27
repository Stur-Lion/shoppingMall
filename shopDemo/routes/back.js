var express = require('express');
var router = express.Router();
var userModel = require('../model/user.js');

/* GET users listing. */
/* / */
router.get('/', function(req, res, next) {
  console.log(1);
  userModel.addUser({
    name:'lion',
    sex:'male',
    age:'18'
  },function(err,data){
    console.log(2);
    if(err){
      throw err
    }
    console.log(data);
  })

  res.send('back')
});

module.exports = router;
