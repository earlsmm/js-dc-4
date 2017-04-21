var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( request, response ) {
  response.render('home')
})

app.get('/projects', function( request, response ) {
  response.render('projects')
})


app.listen(3000, function() {
  console.log('example app listening on port 3000')
})