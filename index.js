const todoList = [
];
console.log(todoList)
function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const text  = todoObject.text;

    const html = `
    <div>${text}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class="todo-delete-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {

  const inputElement = document.querySelector(".js-text-input");

  if (inputElement.value === "") {
    
  }else{
    
  const text = inputElement.value;

  todoList.push({text});
 
  inputElement.value = "";
  renderTodoList();
}
}


