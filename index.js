class TaskItem {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }

  updateName(newName) {
    this.name = newName;
  }
}

class TaskManager {
  constructor() {
    this.form = document.querySelector('form');
    this.tasksContainer = document.querySelector('#tasks');
    this.tasks = [];
    //Event listeners
    this.form.addEventListener('submit', this.addTask.bind(this));
    this.tasksContainer.addEventListener('click', this.handleTaskActions.bind(this));
    // Load tasks from local storage
    this.loadTasks(); 
  }

  addTask(event) {
    event.preventDefault();
    const input = document.querySelector('input');
    const taskName = input.value.trim();
    if (taskName === "") {
      alert("Please Enter a Task");
    } else {
      const task = new TaskItem(taskName);
      // Add task to the tasks array
      this.tasks.push(task); 
      // Save tasks to local storage
      this.saveTasks(); 
      this.renderTask(task);
      input.value = "";
    }
  }

  renderTask(task) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <span class="taskname">${task.name}</span>
      <input type="checkbox" class="check" ${task.completed ? 'checked' : ''}>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;
    this.tasksContainer.appendChild(taskElement);
  }

  handleTaskActions(event) {
    const target = event.target;
    if (target.classList.contains("delete")) {
      this.deleteTask(target);
    } else if (target.classList.contains("edit")) {
      this.editTask(target);
    } else if (target.classList.contains("check")) {
      this.toggleTaskCompletion(target);
    }
  }

  editTask(target) {
    const taskNameElement = target.parentNode.querySelector(".taskname");
    const newTaskName = prompt("Enter the new task name:", taskNameElement.textContent.trim());
    console.log(newTaskName, 'newTaskName')
    if (newTaskName !== null) {
      const taskIndex = this.tasks.findIndex(task => task.name === taskNameElement.textContent);
      if (taskIndex !== -1) {
        this.tasks[taskIndex].name = newTaskName;
        // Save updated tasks to local storage
        this.saveTasks(); 
      }
      // Update the displayed task name
      taskNameElement.textContent = newTaskName; 
    }
  }

  toggleTaskCompletion(target) {
    const taskNameElement = target.parentNode.querySelector(".taskname");
    const taskName = taskNameElement.textContent;
    const task = this.tasks.find(task => task.name === taskName);
    if (task) {
      // Update the completed property based on the checkbox state
      task.completed = target.checked; 
      taskNameElement.classList.toggle("completed");
      // Save updated tasks to local storage
      this.saveTasks(); 
    }
  }

  deleteTask(target) {
    const taskElement = target.parentNode;
    const taskNameElement = taskElement.querySelector(".taskname");
    const taskName = taskNameElement.textContent;
    // Remove task from the tasks array
    this.tasks = this.tasks.filter(task => task.name !== taskName); 
    // Save updated tasks to local storage
    this.saveTasks(); 
    taskElement.remove();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    console.log(savedTasks, 'savedTasks')
    if (savedTasks !== null) { // Check if savedTasks is not null
      this.tasks = JSON.parse(savedTasks);
      this.tasks.forEach(task => {
        this.renderTask(task);
      });
    }
  }
}

const taskManager = new TaskManager();