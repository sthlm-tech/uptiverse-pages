var mongoose = require('mongoose');

var informationSchema = mongoose.Schema({
    text: String,
    published: { type: Date },
    publisher: String
});

var Information = mongoose.model('Information', informationSchema);

module.exports = Information;