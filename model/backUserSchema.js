var mongoose = require('../connnect');

/*用户*/
var backUserSchema = new mongoose.Schema({
    account:String,
    password:String,
    level:String,
    time:Object
})

/* 查找用户 */
backUserSchema.statics.getUserInfo = async function(data){
    this.find(data)
}
/* 获取十条数据 */
/*backUserSchema.statics.getList = async function(data){
    this.find({"array":{"$skice" : [1,10] } } );
}*/
backUserSchema.statics.getList = function (page) {
    return this.find({})
        .skip(page * 5)
        .limit(5)
        .exec();
}
/*添加用户*/
backUserSchema.statics.addOne = function (data) {
    new Promise((resolve) =>{
        this.create(data,function (err,data) {
            if(err){
                throw err
            }
            resolve(data)
        })
    })
}
/* 修改信息 */
backUserSchema.statics.updateInformation = function(conditions,updates,callback){
    this.update(conditions,updates,callback)
}


module.exports = mongoose.model('backUserList',backUserSchema)