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
      this.form.addEventListener('submit', this.addTask.bind(this));
      this.tasksContainer.addEventListener('click', this.handleTaskActions.bind(this));
    }
  
    addTask(event) {
      event.preventDefault();
      const input = document.querySelector('input');
      const taskName = input.value.trim();
      if (taskName === "") {
        alert("Please Enter a Task");
      } else {
        const task = new TaskItem(taskName);
        this.renderTask(task);
        input.value = "";
      }
    }
  
    renderTask(task) {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span class="taskname">${task.name}</span>
        <input type="checkbox" class="check">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      this.tasksContainer.appendChild(taskElement);
    }
  
    handleTaskActions(event) {
      const target = event.target;
      if (target.classList.contains("delete")) {
        target.parentNode.remove();
      } else if (target.classList.contains("edit")) {
        this.editTask(target);
      } else if (target.classList.contains("check")) {
        this.toggleTaskCompletion(target);
      }
    }
  
    editTask(target) {
      const taskNameElement = target.parentNode.querySelector(".taskname");
      const newTaskName = prompt("Enter the new task name:", taskNameElement.textContent.trim());
      if (newTaskName !== null) {
        taskNameElement.textContent = newTaskName;
      }
    }
  
    toggleTaskCompletion(target) {
      const taskNameElement = target.parentNode.querySelector(".taskname");
      taskNameElement.classList.toggle("completed");
    }
  }
  
  const taskManager = new TaskManager();
