var express = require('express')
var app = express()
var bodyParser = require('body-parser')//allows to grab elements from front end and parameters within URL
var mongoose = require('mongoose')
var Book = require('./Book.model')

var db = 'mongodb://localhost:27017/example'

mongoose.connect(db)

app.get('/', function(req, res){
    res.send('happy to be here')
})

app.get('/books', function(req, res){
  console.log('getting all books')
  Book.find({})
    .exec(function(err, books){
      if(err){
        res.send('error has occured')
      } else {
        console.log(books)
        res.json(books)
      }
    })
})

app.get('/books/:id', function(req, res){
    console.log('getting one book')
    Book.findOne({
      _id:req.params.id
    })
    .exec(function(err, book){
      if(err){
        res.send('err occured')
      } else{
        console.log(book)
        res.json(book)
      }
    })
})

var port = 3350;

app.listen(port, function(){
    console.log('app listening on port ' + port)
})
