const deleteAnItem = require('./src/js/deleteTodo.js');

describe('todo functions ADD & DELETE', () => {
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
        index: 0,
      },
    ]);
  });
});
