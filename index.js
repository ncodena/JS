
//// UPDATED JS


class ToDoManager {
  constructor(){
      this.taskArray = [];
      this.taskList = document.querySelector('#task-list');
      this.form = document.querySelector('#task-form');
      this.input = document.querySelector('#task-input');
      this.form.addEventListener('submit', this.addTask.bind(this));  
  }

addTask(event){
  event.preventDefault();
  if (this.input.value.trim() === "") {
      alert("Please Enter a Task");
  } else {
       const newTaskTemplate = `
      <li>
        <div class="taskElement">${this.input.value}</div>
        <button class="edit-button">Add</button>
      </li>
    `;
    this.taskList.innerHTML += newTaskTemplate;
    this.input.value = "";

    const toDoItem = new TaskItem(this.input.value);
    this.taskArray.push(toDoItem);

};
}
}
//this.form.addEventListener('submit', this.addTask.bind(this));

class TaskItem{
  constructor(taskName){
      this.taskName = taskName;
      //this.#taskDone = false;
  }

editTask(value){
  this.taskName = value;
}
  };


const toDo = new ToDoManager();
const newTask = new TaskItem()



// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     if (input.value.trim() === "") {
//         alert("Please Enter a Task");
//     } else {
//         const newTask = document.createElement('li')
//         newTask.innerText = input.value;
//         // newTask.classList.add('div'); //CSS styling
//         taskList.appendChild(newTask);
//         input.value = "";

//         const newTaskActions = document.querySelector('ul'); //creates and stores task actions(delete, edit buttons)
//         // newTaskActions.classList.add('actions'); // CSS styling
//         newTaskActions.appendChild(newTask);


//         // creating DELETE button
//         const deleteButton = document.createElement('button');
//         deleteButton.innerText = 'DELETE';
//         newTask.appendChild(deleteButton);
//         deleteButton.addEventListener('click', deleteTask) 

//         // function that executes DELETE
//         function deleteTask(){
//             taskList.removeChild(newTask);
          
//         }  

//         // creating EDIT button
//         const editButton = document.createElement('button');
//         editButton.innerText = 'EDIT';
//         newTask.appendChild(editButton);
//         let inputTask;
//         editButton.addEventListener('click', () => {
//             if(editButton.innerText === 'EDIT'){
//                 editButton.innerText = 'SAVE' 
//                 inputTask = document.createElement('input');
//                 newTask.appendChild(inputTask) 
//                 } else {
//                     if(editButton.innerText === 'SAVE'){
//                         if (inputTask.value.trim() === "") {
//                             alert("Please edit a Task");
//                         } else{
//                             console.log(inputTask.value);
//                             newTask.innerText = inputTask.value;
//                             inputTask.remove();
//                             editButton.innerText = 'EDIT'; 
//                             newTask.appendChild(deleteButton);
//                             newTask.appendChild(editButton);
//                         }   
//                     }
//                 }
                             
//              }) 
                  
// }

// })



// const checkbox = document.querySelectorAll('.checkbox');

//             	let unchecked = true;

//                 checkbox.forEach((checkbox)=>{
//                 checkbox.addEventListener("click", ()=>{
//                      if (unchecked){checkbox.src = "imgs/square-check-regular.svg";
//                     } else {
//                      checkbox.src = "imgs/square-regular.svg"
//                      }
//                      unchecked = !unchecked
//         });
//         });


      // paragraph.addEventListener('click', () => {
      //     paragraph.style.textDecoration = 'line-through';
      // })


      // paragraph.addEventListener('dblclick', () => {
      //     task.removeChild(paragraph);
      // })