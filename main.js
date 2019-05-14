// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem(text) {
  if (text !== '') {
    let newItem = document.createElement('li')
    newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
    list.appendChild(newItem)
  }
}

// write your code here
const addBtn = document.querySelector('#addBtn')
const inputBox = document.querySelector('.form-control')
addBtn.addEventListener('click', function (event) {
  let inputValue = document.querySelector('#newTodo').value
  addItem(inputValue)
  inputBox.value = ''
})

// Delete
list.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL') { // add here
    event.target.classList.toggle('checked')
  }
})

// Handle enter key
inputBox.addEventListener('keypress', function (event) {
  let inputValue = document.querySelector('#newTodo').value
  if (event.keyCode === 13) {
    addItem(inputValue)
    inputBox.value = ''
  }
})