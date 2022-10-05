const deleteAnItem = require('./src/js/deleteTodo.js');
const addTodo = require('./src/js/addTodo.js');

describe('todo functions ADD & DELETE', () => {
  test('add a todo', () => {
    const todo = {
      description: 'test',
      completed: false,
      index: 0,
    };
    let todos = [];
    const result = addTodo(todo, todos);
    expect(result.length).toBe(1);
  })
  
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
    const i = 0;
    const result = deleteAnItem(i, todos);
    expect(result).toEqual([
      {
        desc: 'second',
        completed: false,
        index: 1,
      },
    ]);
  });
});
