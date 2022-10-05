function deleteAnItem (i, todos) {
  todos.splice(i, 1);
  return todos;
}

module.exports = deleteAnItem;