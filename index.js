let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (document.querySelector('input').value.trim() === "") {
    alert("Please Enter a Task");
  } else {
    let taskName = document.querySelector('input').value;
    let taskElement = `
        <div class="task">
        <span class="taskname">
            ${taskName}
        </span>
        <input type="checkbox" class="check">
        <button class="edit">
            Edit
        </button>
        <button class="delete">
            Delete
        </button>
        </div>
    `;
    document.querySelector('#tasks').innerHTML += taskElement;
  }
});

let tasksContainer = document.querySelector("#tasks");
tasksContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentNode.remove();
  } else if (event.target.classList.contains("edit")) {
    let taskNameElement = event.target.parentNode.querySelector(".taskname");
    let newTaskName = prompt("Enter the new task name:", taskNameElement.textContent.trim());
    if (newTaskName !== null) {
      taskNameElement.textContent = newTaskName;
    }
  } else if (event.target.classList.contains("check")) {
    let taskNameElement = event.target.parentNode.querySelector(".taskname");
    taskNameElement.classList.toggle("completed");
  }
});