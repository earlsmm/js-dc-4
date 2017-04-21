// Model
var data = [
  {
    title: 'Test todo',
    isCompleted: false
  }
]

// View
function renderView() {
  var app = document.getElementById('app')
  var templateSource = document.getElementById('todo-list')
  var template = Handlebars.compile( templateSource.innerHTML )
  var renderedTemplate = template( data )
  app.innerHTML = renderedTemplate
}


// Controller

function setup() {
  renderView()
  document.querySelector('form').addEventListener('submit', createTodo)
}

function createTodo( e ) {

  e.preventDefault()
  var todoInput = e.target.querySelector('input')

  var newTodo = {
    title: todoInput.value,
    isCompleted: false
  }

  data.push( newTodo )
  todoInput.value = ''

  renderView()

}

window.onload = setup
