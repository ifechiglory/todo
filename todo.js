const input = document.getElementById("todo-input");
const addTask = document.getElementById("add");
const todoList = document.getElementById("todo-list");

const msg = document.createElement("p");
if (todoList.children.length === 0) {
  msg.textContent = 'No task found. Click on the add task button to create a task.';
  todoList.appendChild(msg);
}

addTask.addEventListener("click", function addTodo(e) {
  e.preventDefault();
  const task = input.value;

  if (task === "") {
    alert("Cannot add an empty task. Please create a task.");
    return;
  }

  if (task) {
    msg.style.display = 'none';
    const li = document.createElement("li");
    li.textContent = task;
    todoList.appendChild(li);
    input.value = "";

    const section = document.createElement("section");
    li.appendChild(section);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    section.appendChild(deleteBtn);
    deleteBtn.style.backgroundColor = 'red';

    deleteBtn.addEventListener('click', function deleteTask() {
      todoList.removeChild(li);
    });

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginLeft = '20px';
    section.appendChild(checkbox);

    checkbox.addEventListener('click', function markComplete() {
      li.classList.toggle('complete');
    });
  }
});
