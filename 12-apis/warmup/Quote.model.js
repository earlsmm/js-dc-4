var mongoose = require('mongoose')
var Schema = mongoose.Schema

var QuoteSchema = new Schema ({
    id: Number,
    author: String,
    text: String
})

module.exports = mongoose.model('Quote', QuoteSchema) //exports Book model schema for use in other files
