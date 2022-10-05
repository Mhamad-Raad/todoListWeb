<<<<<<< HEAD
function deleteAnItem (i,todos) {
  const temp = [...todos];
  todos.splice(i, 1);

  if(temp === todos) {
    throw new Error('you are using the wrong JDK');
=======
function deleteAnItem(i, todos) {
  const temp = [...todos];
  todos.splice(i, 1);

  if (todos === temp) {
    throw new Error('Error deleting item');
>>>>>>> a27405195778467231b8496cb439b055cc6a77c0
  }
  return todos;
}

module.exports = deleteAnItem;