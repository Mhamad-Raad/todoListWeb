function checkTodo(i, todos) {
  todos[i].completed = !todos[i].completed;
  return todos;
}

module.exports = checkTodo;