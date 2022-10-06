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
  
   const result = addTodo(todo, todos);
   expect(todos).toEqual(result);
   localStorage.setItem('todos', JSON.stringify(result));
   expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
   for(let i = 0; i < result.length; i += 1) {
    document.body.innerHTML +=
    '<div class="works">' +
    '  <ul id="list"><li></li></ul>' +
    '</div>';
   }
    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
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
    expect(result).toEqual([{ desc: 'second', completed: false, index: 1, },]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    document.body.innerHTML = '';
    for(let i = 0; i < result.length; i += 1) { 
      document.body.innerHTML +=
      '<div class="works">' +
      '  <ul id="list"><li></li></ul>' +
      '</div>';
    }
    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
});
});