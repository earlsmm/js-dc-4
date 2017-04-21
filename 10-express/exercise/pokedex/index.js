var express = require('express')

var app = express()

//connecting handlebars to express
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
  res.send('hey')
})

app.listen(3000, function(){
  console.log('your pokedex is working')
})
