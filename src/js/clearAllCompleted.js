function clearAllCompleted(todos) {
  todos = todos.filter((todo) => todo.completed !== true);
  return todos;
}

module.exports = clearAllCompleted;