var mongoose = require('mongoose');

var importantSchema = mongoose.Schema({
    text: String,
    importance: Number
});

var Important = mongoose.model('Important', importantSchema, "important");

module.exports = Important;