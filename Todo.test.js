const deleteAnItem = require('./src/js/deleteTodo.js');
const addTodo = require('./src/js/addTodo.js');
let localStorage = [];
describe('todo functions ADD & DELETE', () => {
  test('add a todo', () => {
    const todo = {
      description: 'test',
      completed: false,
      index: 0,
    };
    const todos = [];
    const result = addTodo(todo, todos);
  
    localStorage.push(todo);
    expect(localStorage).toEqual(result);
    expect(result.length).toBe(1);

    console.log(document.querySelector('body'));
  });
  test('delete an item', () => {
    const todos = [
      {
        desc: 'first',
        completed: false,
        index: 0,
      },
      {
        desc: 'second',
        completed: false,
        index: 1,
      },
    ];
    localStorage = todos;
    const i = 0;
    const result = deleteAnItem(i, todos); 
    expect(result).toEqual([
      {
        desc: 'second',
        completed: false,
        index: 1,
      },
    ]);
    localStorage.splice(i, 1);
    expect(localStorage).toBe(result);
  });
});


