const mongoose = require('./../connnect');

/*用户*/
var backUserSchema = new mongoose.Schema({
    name:String,
    accountNumber: String,
    password:String,
    level:String,
    time:Object
})

/* 查找用户 */
backUserSchema.statics.getUserInfo = function(data,callback){
    this.find(data,callback)
}
/*添加用户*/
backUserSchema.statics.addOne = function (data,callback) {
    this.create(data,callback)
}
/* 修改信息 */
backUserSchema.statics.updateInformation = function(conditions,updates,callback){
    this.update(conditions,updates,callback)
}


module.default = mongoose.model('backUser',backUserSchema)