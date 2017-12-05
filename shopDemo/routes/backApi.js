var express = require('express');
var fs = require('fs');
var router = express.Router();
var commdity = require('./../model/commodity');
var common = require('./../commom/common');

/* GET users listing. */
/* /backApi */
/*添加轮播图*/
router.post('/addCarousel',function(req, res, next){
  console.log(req.body);
  commdity.getCount({},function(count){
    console.log(count);
    commdity.addCommdity({
      orderId:count+1,
      avtor:req.body.logoUrl,
      evelId:req.body.evelId,
      introduce:req.body.introduce,
      time:common.curentTime(),
      isDelet:1,
      isUse:1,
    },function(err,data){
      if(err){
        throw err
      }else{
        console.log(data);
        res.json({retcode:1,info:['添加成功'],data:{}})
      }
    })
  })
})

/*上传图片*/
router.post('/uploadFile',function(req, res, next){
  if(req.busboy){
    req.busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log(fieldname);
      console.log(file);
      var newFilename = String((new Date()).getTime())
      newFilename = newFilename+'.png'
      var filePath = __dirname + '/../public/avtor/'+ newFilename;
      console.log(filePath);
      var url = '/avtor/'+newFilename;

      file.pipe(fs.createWriteStream(filePath));
      file.on('end', function(){
        res.json({success: true, url: url});
      })
    });
    req.pipe(req.busboy);
  }
})

module.exports = router;
