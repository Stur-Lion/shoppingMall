var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopMall',{ useMongoClient: true });


module.exports = mongoose;