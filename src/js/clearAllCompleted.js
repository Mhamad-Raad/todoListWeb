function clearAllCompleted(todos) {
  todos = todos.filter((todo) => todo.completed !== true);
  let i = 0;
  todos.forEach((todo) => {
    todo.index = i + 1;
    i += 1;
  });
  return todos;
}

module.exports = clearAllCompleted;