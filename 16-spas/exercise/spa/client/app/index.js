var App = document.getElementById('app')

//store the Views
var Views = {
  toDoList:{
    function setup(){

    }
  }.
  newTodo{
    function setup(){

    }
  },
  singleTodo{
    function setup(){

    }
  }
}

//place for our data
var Todo ={
  todo:[
    {
      'title': 'Test',
      'description': 'This is my first to do'
    }
  ]
}

//start setup function; takes care of starting the application
function setup(){
  var templateSources = document.querySelectorAll('[id^="template-"]')//looking for id attribute that start with template

  for (var i = 0; i < templateSources.length; i++){
    var render = Handlebars.compile( templateSources[i].innerHTML )
    Views[ templateSources[i].id ]
  }
}

setup()
