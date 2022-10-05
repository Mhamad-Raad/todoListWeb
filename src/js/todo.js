/* eslint-dsibale no-loop-func, no-func-assign, no-class-assign */
import deleteAnItem from './deleteTodo.js';

const addInput = document.querySelector('.todo-input');
let todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : [];
let index = todos.length;
const todoDiv = document.querySelector('.todo-list');
const clearBtn = document.querySelector('.clear-button');

const render = () => {
  if (todos !== null) {
    todoDiv.innerHTML = '';
    todos.forEach((todo) => {
      const check = todo.completed === true ? 'checked' : '';
      todoDiv.innerHTML += `
        <div class="todos">
          <input type="checkbox" class="todo-check" value="${todo.completed}" ${check}>
          <input type="text" class="todo-desc clear-border" value="${todo.desc}">
          <i class="fa-solid fa-bars"></i>
          <button type="button" class="trash-btn">delete</buttom>
        </div>
      `;
    });
  }
  for (let i = 0; i < todoDiv.querySelectorAll('.todos').length; i += 1) {
    //  update checked status
    const todoRow = todoDiv.querySelectorAll('.todos')[i];
    todoRow.querySelector('.todo-check').addEventListener('click', () => {
      todos[i].completed = !todos[i].completed;
      localStorage.setItem('todos', JSON.stringify(todos));
    });

    //  change color and icon on input focus

    todoRow.addEventListener('focusin', () => {
      todoRow.classList.add('active');
      todoRow.querySelector('.todo-desc').classList.add('active');
      todoRow.querySelector('.trash-btn').style.display = 'block';
      todoRow.querySelector('.fa-bars').style.display = 'none';
    });

    todoRow.querySelector('.trash-btn').addEventListener('click', () => {
      const updTodo = deleteAnItem(i, todos);
      for (let a = i; a < updTodo.length; a += 1) {
        updTodo[a].index -= 1;
      }
      index -= 1;
      localStorage.setItem('todos', JSON.stringify(updTodo));
      render();
    });

    todoRow.addEventListener('focusout', (e) => {
      const parent = todoRow;
      const leavingParent = !parent.contains(e.relatedTarget);
      if (leavingParent) {
        todoRow.classList.remove('active');
        todoRow.querySelector('.todo-desc').classList.remove('active');
        todoRow.querySelector('.fa-bars').style.display = 'flex';
        todoRow.querySelector('.trash-btn').style.display = 'none';
      }
    });
    //  update description
    todoRow.querySelector('.todo-desc').addEventListener('change', (e) => {
      todos[i].desc = e.target.value;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
  }
};
addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addInput.value === '') {
      alert('You must write something!');
    } else {
      const todoVal = addInput.value;
      addInput.value = '';
      index += 1;
      todos.push(
        {
          index: index,
          desc: todoVal,
          completed: false,
        },
      );
      localStorage.setItem('todos', JSON.stringify(todos));
      render();
    }
  }
});

clearBtn.addEventListener('click', () => {
  todos = todos.filter((todo) => todo.completed !== true);
  /* eslint-disable prefer-const */
  let i = 0;
  todos.forEach((todo) => {
    todo.index = i + 1;
  });
  index = todos.length;
  localStorage.setItem('todos', JSON.stringify(todos));
  render();
});

window.onload = render();