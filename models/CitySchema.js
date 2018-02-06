var mongoose = require('mongoose');
var CommentSchema = require('./CommentSchema')

var Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: String,
    temp: Number,
    icon: String,
    text: String,
    comments: [CommentSchema.CommentSchema],
});

const City = mongoose.model('city', CitySchema);

module.exports = City;