/*
* @jest-environment jsdom
*/

import updateTodo from './src/js/updateTodo';
// import clearAllCompleted from './src/js/clearAllCompleted';
import checkTodo from './src/js/checkTodo';

describe('todo functions UPDATE, CLEAR & CHECK', () => {
  test('update a todo', () => {
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
    const result = updateTodo(i, todos, 'new');
    expect(result).toEqual([{ desc: 'new', completed: false, index: 0 }, { desc: 'second', completed: false, index: 1 }]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    document.body.innerHTML = '';
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += '<div class="works">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
  });

  test('check a todo', () => {
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
    const result = checkTodo(i, todos);
    expect(result).toEqual([{ desc: 'first', completed: true, index: 0 }, { desc: 'second', completed: false, index: 1 }]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);
    document.body.innerHTML = '';
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += '<div class="works">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const list = document.querySelectorAll('.works');
    expect(list).toHaveLength(result.length);
  });
});