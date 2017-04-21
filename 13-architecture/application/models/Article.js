var mongoose = require ('mongoose') //where we use mongoose it needs to be required
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  comments: Array
})

var Article = mongoose.model( 'Article', ArticleSchema ) //Article is an object that interacts with the database

module.exports = Article //
