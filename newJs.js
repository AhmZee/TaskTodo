const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const text = todoObject.text;

    if (todoObject.editing) {
      // Display the edit input and save button
      const html = `
        <input class="edit-todo-input" value="${text}" />
        <button onclick="saveTodo(${i})" class="save-todo-button">Save</button>
      `;
      todoListHTML += html;
    } else {
      // Display the todo item with edit button
      const html = `
        <div>${text}</div>
        <button onclick="startEditing(${i})" class="todo-edit-button">Edit</button>
        <button onclick="deleteTodo(${i})" class="todo-delete-button">Delete</button>
      `;
      todoListHTML += html;
    }
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-text-input");
  if (inputElement.value !== "") {
    const text = inputElement.value;
    todoList.unshift({ text, editing: false });
    inputElement.value = "";
    renderTodoList();
  }
  console.log(todoList)
}

function startEditing(index) {
  // Set editing flag to true for the selected item
  todoList[index].editing = true;
  renderTodoList();
}

function saveTodo(index) {
  // Update the text with the edited value and set editing flag to false
  const editInput = document.querySelector(".edit-todo-input");
  todoList[index].text = editInput.value;
  todoList[index].editing = false;
  renderTodoList();
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

// Initial rendering of the todo list
renderTodoList();
