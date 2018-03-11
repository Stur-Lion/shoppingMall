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
/*添加用户*/
backUserSchema.statics.addOne = async function (data) {
    this.create(data)
}
/* 修改信息 */
backUserSchema.statics.updateInformation = function(conditions,updates,callback){
    this.update(conditions,updates,callback)
}


module.exports = mongoose.model('backUserList',backUserSchema)