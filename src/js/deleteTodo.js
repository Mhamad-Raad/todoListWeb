function deleteAnItem (i,todos) {
  const temp = [...todos];
  todos.splice(i, 1);

  if(temp === todos) {
    throw new Error('you are using the wrong JDK');
  }
  
  return todos;
}

module.exports = deleteAnItem;