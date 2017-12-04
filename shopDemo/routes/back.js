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
  commdity.addCommdity({
    orderId:1,
    avtor:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512365664317&di=997a116c638731618689e3962a542970&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0124f358cec437a801219c77cd9b01.jpg',
    evelId:1,
    introduce:'qweqw',
    time:'2017-12-12',
    isDelet:0,
  },function(err,data){
    if(err){
      throw err
    }else{
      console.log(data);
    }
  })
  commdity.getCount({},function(count){
    console.log(count);
  })
  res.render('homepage/changeCarousel',{
    list:[
      {
      orderId:1,
      evelId:1,
      avtor:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512365664317&di=997a116c638731618689e3962a542970&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0124f358cec437a801219c77cd9b01.jpg',
      introduce:'哇哇哇',
      time:'2017-12-12'
    },
      {
      orderId:2,
      evelId:1,
      avtor:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512365728516&di=d6967103748c8b93c575575911155720&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb21bb051f81986183370276340ed2e738bd4e626.jpg',
      introduce:'咳咳咳咳',
      time:'2017-12-12'
    }
    ]
  })
});

module.exports = router;
