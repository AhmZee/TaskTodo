const todoList = [];

renderTodoList();

function renderTodoList() {
  const labels = document.querySelector(".labels");
  if (todoList.length > 0) {
    labels.style.display = "grid";
  } else {
    labels.style.display = "none";
  }
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const title = todoObject.title;
    const description = todoObject.description;

    if (todoObject.startEdit) {
      // Display the edit input and save button
      const html = `
      <div class="save-todo-grid">
        <input class="js-edit-title" value="${title}" />
        <input class="js-edit-description" value="${description}" />
        <button onclick="saveTodo(${i})" class="save-todo-button">Save</button>
        </div>
      `;
      todoListHTML += html;
    } else {
      // Display the todo item with edit button
      const html = `
      <div class="edit-todo-grid">
        <div class="title">${title}</div>
        <div class="description">${description}</div>
      
        <button onclick="startEditing(${i})" class="todo-edit-button">Edit</button>
        <button onclick="deleteTodo(${i})" class="todo-delete-button">Delete</button>
      </div>
      `;
      todoListHTML += html;
    }
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const titleElement = document.querySelector(".js-title-input");
  const descriptionElement = document.querySelector(".js-description-input");
  if (titleElement.value !== "" && descriptionElement.value !== "") {
    const title = titleElement.value;
    const description = descriptionElement.value;
    todoList.unshift({ title, description, startEdit: false });
    titleElement.value = "";
    descriptionElement.value = "";
  }
  renderTodoList();
}

function startEditing(index) {
  // Set editing flag to true for the selected item
  todoList[index].startEdit = true;
  renderTodoList();
}

function saveTodo(index) {
  // Update the text with the edited value and set editing flag to false

  const editTitleInput = document.querySelector(".js-edit-title");
  const editDescriptionInput = document.querySelector(".js-edit-description");

  if (editTitleInput.value === "" || editDescriptionInput.value === "") {
  } else {
    todoList[index].title = editTitleInput.value;
    todoList[index].description = editDescriptionInput.value;
    todoList[index].startEdit = false;
    renderTodoList();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

// Initial rendering of the todo list
renderTodoList();
