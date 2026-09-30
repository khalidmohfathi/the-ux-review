var taskInput = document.getElementById("taskInput");

var addTaskBtn = document.getElementById("addTaskBtn");

var tasksList = document.getElementById("tasksList");
var tasksCount = document.getElementById("tasksCount");
var emptyState = document.getElementById("emptyState");

var allTasks = [];

function clearInput() {
  taskInput.value = "";
}

function createTask() {
  var task = {
    id: Math.random(),
    name: taskInput.value,
  };
  allTasks.push(task);
}

function showEmptyState() {
  if (allTasks.length > 0) {
    emptyState.classList.add("d-none");
  } else {
    emptyState.classList.remove("d-none");
  }
}

function displayTasks() {
  showEmptyState();
  var cartona = "";
  for (var i = 0; i < allTasks.length; ++i) {
    cartona += `
      <li class="list-group-item d-flex align-items-center justify-content-between py-3">
        <div class="d-flex align-items-center">
          <i class="fa-regular fa-circle text-primary me-3"></i>
          <span>${allTasks[i].name}</span>
        </div>
        <button 
          type="button" 
          class="btn btn-sm btn-outline-danger delete-btn" 
          onclick="deleteTask(${allTasks[i].id})"
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </li>
    `;
  }
  tasksList.innerHTML = cartona;
  tasksCount.innerHTML = `${allTasks.length} tasks`;
}

function findIndex(id) {
  for (var i = 0; i < allTasks.length; ++i) {
    if (allTasks[i].id == id) {
      return i;
    }
  }
}

function deleteTask(id) {
  var index = findIndex(id);
  allTasks.splice(index, 1);
  displayTasks();
}

function main() {
  if (!taskInput.value) return;
  createTask();
  clearInput();
  displayTasks();
}
