function deleteAnItem (i, todos) {
  const temp = [...todos];
  todos.splice(i, 1);

  if(todos === temp) {
    throw new Error('Error deleting item');
  }
  
  return todos;
}

module.exports = deleteAnItem;