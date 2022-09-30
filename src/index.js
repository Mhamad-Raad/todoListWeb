import './style.css';

const todos = [
  { index: 0, description: 'Wash the dishes', completed: true },
  { index: 1, description: 'Complete the project', completed: false },
  { index: 2, description: 'Find a house', completed: false },
];

const todoDiv = document.querySelector('.todo-list');

window.onload = () => {
  for (let i = 0; i < todos.length; i += 1) {
    todoDiv.innerHTML += `
    <div class="todos">
      <input type="checkbox" name="no${i}" class="todo-check" value="true">
      <input type="text" class="todo-desc" id="todo${i}">
      <i class="fa-solid fa-bars"></i>       
    </div>
    `;
  }

  for (let i = 0; i < todos.length; i += 1) {
    document.getElementById(`todo${i}`).value = todos[i].description;
  }
};