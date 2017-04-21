//require dependencies
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require ('express-handlebars')
var mongoose = require ('mongoose')

var app = express()

mongoose.connect('mongodb://localhost:27017/hackerwall')//hackerwall is what we want the database to be called


var Article = require('./models/Article')

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))//static assets are in a public folder and are referenced in view templates.

app.use(bodyParser.urlencoded({extended: true}))//sets up body-parser and express takes care of the rest

var testArticle = new Article({
  url: 'www.google.com',
  author: 'ME',
  title: 'Google',
  description: 'A really good search engine'
})

testArticle.save()

//application routes i.e. controller
app.get('/', function( req, res){
    //index route
    //list every article

    Article.find({}, function( err, articles ){

        res.render('index', { articles: articles })//looks for index.handlebars within the views folder

    })//finds all the articles

})



app
  .get('/article/new', function( req, res){
    //new view
    //render tempate for creating a new article

    res.render('new')
  })
  .post('article/new', function( req, res) {
    //create a new article in the database
    //render show view for the new article



  })

  //article with parameter of id
  app.get('/article/:id', function( req, res){
      //show route
      //show details for a specific/single article
  })

//run on port 3000
app.listen(3000)
