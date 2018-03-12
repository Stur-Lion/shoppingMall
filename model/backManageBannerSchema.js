var mongoose = require('../connnect');

/*用户*/
var backManageBannerSchema = new mongoose.Schema({
    url:String,
    constructoer:String,
    id:String,
    time:Object
})

/*添加照片*/
backManageBannerSchema.statics.addBanner = function () {

}


module.exports = mongoose.model('backManageBannerList',backManageBannerSchema)