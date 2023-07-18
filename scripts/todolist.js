let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task === '') {

    alert("You must write something!");
  } else { 
    tasks.push(task);
    renderTasks();
  }
  taskInput.value = '';
}


function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex align-items-center';

    listItem.innerHTML = `
    <span class="mr-auto">${task}</span>
    <div style="position:absolute; right:0%"><button type="button" class="btn btn-outline-danger btn-sm mr-2" onclick="deleteTask(${index})" style="background-color: red; color: black;">Delete</button></div>
    <div style="position:absolute; right:100%"><button type="button" class="btn btn-outline-danger btn-sm mr-2" onclick="buttonColor(${index})" style="background-color: green; color: black;">Done</button></div>
    `;
    taskList.appendChild(listItem);

  });
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function buttonColor(index) {
  const taskList = document.getElementById('taskList');
  const taskItem = taskList.childNodes[index];
  taskItem.style.backgroundColor = "lightgreen"; 
}