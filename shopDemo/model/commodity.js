var mongoose = require('./../connect');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('连接成功');
});

var commditySchema = new mongoose.Schema({
    orderId:Number, //商品id
    avtor:String,  //图片地址
    evelId:Number, // 层级id
    introduce:String, //描述
    time:String, //时间
    isDelet:Number, //是否被删除 0：商品上线 1：商品被软删除
    isUse:Number,   //是否被启用 0：不启用  1：启用
    type:String
});
/*查询数量*/
commditySchema.statics.getCount = function(data,callback){
    this.find(data).count({},function(err,count){
        if(err){
            throw err
        }else{
            callback(count)
        }
    })
}
/* 添加轮播图商品 */
commditySchema.statics.addCommdity = function(data,callback){
    this.create(data,callback);
}
/* 查找轮播图所有商品 */
commditySchema.statics.getAllCommdity = function(data,callback){
    this.find(data,function(err,data){
        if(err){
            throw err
        }else{
            callback(data)
        }
    })
}
/* 查找轮播图指定可用商品 */
commditySchema.statics.getCanuseCommdity = function(data,callback){
    this.find(data,function(err,data){
        if(err){
            throw err
        }else{
            callback(data)
        }
    })
}


module.exports = mongoose.model('commdityList',commditySchema);