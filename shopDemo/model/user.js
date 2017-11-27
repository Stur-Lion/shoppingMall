var mongoose = require('./../connect');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('连接成功');
});

var userSchema = new mongoose.Schema({
    name:String,
    sex:String,
    age:String
});
userSchema.statics.addUser = function(data,callback){
    this.create(data,callback);
}


module.exports = mongoose.model('userList',userSchema);