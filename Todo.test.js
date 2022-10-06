/*
* @jest-environment jsdom 
*/

const deleteAnItem = require('./src/js/deleteTodo.js');
const addTodo = require('./src/js/addTodo.js');
describe('todo functions ADD & DELETE', () => {
  test('add a todo', () => {
    const todo = {
      description: 'test',
      completed: false,
      index: 0,
    };
    const todos = [];
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list"><li></li></ul>' +
    '</div>';
    addTodo(todo, todos);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
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
    document.body.innerHTML =
    '<div>' +
    '  <ul id="list"><li></li></ul>' +
    '</div>';
    deleteAnItem(i, todos);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(1);
});
});