const addInput = document.querySelector('.todo-input');
const todo = document.querySelector('.todo-list');
let todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : [];
let index = todos.length;
const todoDiv = document.querySelector('.todo-list');

let render = () => {
  if ( todos !== null ) {
    todoDiv.innerHTML = ``;
    todos.forEach((todo) => {
      var check = todo.completed === true ? 'checked' : '';
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
  for( let i = 0; i < todoDiv.querySelectorAll('.todos').length; i++)  {

    //update checked status
    todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-check').addEventListener('click', (e) => {
      todos[i].completed = !todos[i].completed;
      localStorage.setItem('todos', JSON.stringify(todos));
    });

    //change color and icon on input focus
    todoDiv.querySelectorAll('.todos')[i].addEventListener('focusin', (e) => {
      todoDiv.querySelectorAll('.todos')[i].classList.add('active');
      todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-desc').classList.add('active');
      todoDiv.querySelectorAll('.todos')[i].querySelector('.trash-btn').style.display = 'block';
      todoDiv.querySelectorAll('.todos')[i].querySelector('.fa-bars').style.display = 'none';
    });

    todoDiv.querySelectorAll('.todos')[i].addEventListener('focusin', (e) => {
      console.log('ypasd');
    });

// delete
    todoDiv.querySelectorAll('.todos')[i].querySelector('.trash-btn').addEventListener('click', (e) => {
      index -= 1;
      todos.splice(i, 1);
      for(let a = i; a < todos.length; a++) {
        todos[a].index -= 1;
      }
      
      localStorage.setItem('todos', JSON.stringify(todos));
      render();
    });


    todoDiv.querySelectorAll('.todos')[i].addEventListener('focusout', (e) => {
      const parent =  todoDiv.querySelectorAll('.todos')[i];
      const leavingParent = !parent.contains(e.relatedTarget);
      if (leavingParent) {
        todoDiv.querySelectorAll('.todos')[i].classList.remove('active');
        todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-desc').classList.remove('active');
        todoDiv.querySelectorAll('.todos')[i].querySelector('.fa-bars').style.display = 'flex';
        todoDiv.querySelectorAll('.todos')[i].querySelector('.trash-btn').style.display = 'none';
      }
      
    });

    //update description
    todoDiv.querySelectorAll('.todos')[i].querySelector('.todo-desc').addEventListener('change', (e) => {
      console.log(e.target.value);
      todos[i].desc = e.target.value;
      localStorage.setItem('todos', JSON.stringify(todos));
    });
    
    
  };
};

addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (addInput.value === '') {
      alert('You must write something!');
    } else {
      const todoVal = addInput.value;  
      addInput.value = '';
      index += 1;
      todos.push({index: index, desc: todoVal, completed: false});
      localStorage.setItem('todos', JSON.stringify(todos));
      render();
    }
  }
});



// console.log(document.querySelector('.todo-list').querySelectorAll('.todos')[0].querySelector('.todo-desc'));
// const clear = document.querySelector('.clear-button');
// let todosDiv = document.querySelector('.todos');
// clear.addEventListener('click', () => {
  
//   for( let i = 0; i < todos.length; i++){
//     if (todos[i].completed === true) {
//       console.log('clicked');
//       todos.splice(i, 1);
//       index-=1;
//       console.log(todosDiv);
//     }
//   }
// });
window.onload = render();
export default todos;