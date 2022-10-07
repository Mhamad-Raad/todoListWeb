function updateTodo(i, todos, newDesc) {
  todos[i].desc = newDesc;
  return todos;
}

module.exports = updateTodo;