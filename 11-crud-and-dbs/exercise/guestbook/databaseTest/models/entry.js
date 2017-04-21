var mongoose = require('mongoose')
var Schema = mongoose.Schema

var entrySchema = new Schema({
  name: String,
  created_on: Date,
  content: String
})

var Entry = mongoose.model('Entry', entrySchema)//Create model called Entry

module.exports = Entry
