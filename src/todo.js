/* eslint-dsibale no-loop-func */
const addInput = document.querySelector('.todo-input');
const todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : [];
let index = todos.length;
const todoDiv = document.querySelector('.todo-list');

const render = () => {
  if (todos !== null) {
    todoDiv.innerHTML = '';
    todos.forEach((todo) => {
      const check = todo.completed === true ? 'checked' : '';
      todoDiv.innerHTML += `
        <div class="todos">
          <input type="checkbox" class="todo-check" value="${todo.completed}" ${check}>
          <input type="text" class="todo-desc" value="${todo.desc}">
          <i class="fa-solid fa-bars"></i>
          <button type="button" class="trash-btn">delete</buttom>
        </div>
      `;
    });
  }
  for (let i = 0; i < todoDiv.querySelectorAll('.todos').length; i += 1) {
    //  update checked status

    todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-check').addEventListener('click', () => {
      todos[i].completed = !todos[i].completed;
      localStorage.setItem('todos', JSON.stringify(todos));
    });

    //  change color and icon on input focus

    todoDiv.querySelectorAll('.todos')[i].addEventListener('focusin', () => {
      todoDiv.querySelectorAll('.todos')[i].classList.add('active');
      todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-desc').classList.add('active');
      todoDiv.querySelectorAll('.todos')[i].querySelector('.trash-btn').style.display = 'block';
      todoDiv.querySelectorAll('.todos')[i].querySelector('.fa-bars').style.display = 'none';
    });

    todoDiv.querySelectorAll('.todos')[i].querySelector('.trash-btn').addEventListener('click', () => {
      todos.splice(i, 1);
      for (let a = i; a < todos.length; a += 1) {
        todos[a].index -= 1;
      }
      index -= 1;
      localStorage.setItem('todos', JSON.stringify(todos));
      render();
    });

    todoDiv.querySelectorAll('.todos')[i].addEventListener('focusout', (e) => {
      const parent = todoDiv.querySelectorAll('.todos')[i];
      const leavingParent = !parent.contains(e.relatedTarget);
      if (leavingParent) {
        todoDiv.querySelectorAll('.todos')[i].classList.remove('active');
        todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-desc').classList.remove('active');
        todoDiv.querySelectorAll('.todos')[i].querySelector('.fa-bars').style.display = 'flex';
        todoDiv.querySelectorAll('.todos')[i].querySelector('.trash-btn').style.display = 'none';
      }
    });
    //  update description
    todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-desc').addEventListener('change', (e) => {
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

window.onload = render();
export default todos;