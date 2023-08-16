/* //const input = document.querySelector('input');
const form = document.querySelector("form");
const list = document.querySelector("#listItems");
const itemsInput = form.elements['items'];
const inputText = document.querySelector('#txt');

const submitFunction = (event) => {
    event.preventDefault();
    const itemsInput = form.elements['items'];

    if (itemsInput.value.trim() === "") {
        alert("There is not input. Please enter a value before submitting");
    } else {
            //item
           let newItem = document.createElement('li');
           let newItemText = document.createElement('div');

           let newItemContent = document.createTextNode(`${itemsInput.value}`);
           newItemText.appendChild(newItemContent);
           newItem.appendChild(newItemText);
           newItem.setAttribute('class', `item`);
           list.appendChild(newItem);
            //edit
            let editButton = document.createElement("BUTTON");
            let editText = document.createTextNode('Edit');
            editButton.appendChild(editText);
            editButton.setAttribute("class", `edit-button` );
            newItem.appendChild(editButton); 
            //done
            let doneButton = document.createElement("BUTTON");
            let doneText = document.createTextNode('Done');
            doneButton.appendChild(doneText);
            doneButton.setAttribute("class", `done-button`);
            newItem.appendChild(doneButton); 
            //tick
            let tickButton = document.createElement("INPUT");
            tickButton.setAttribute("type", "checkbox")
            tickButton.setAttribute("class", `tick-button`);
            newItem.appendChild(tickButton);
            //delete
            let deleteButton = document.createElement("BUTTON");
            let buttonText = document.createTextNode('Delete');
            deleteButton.appendChild(buttonText);
            deleteButton.setAttribute("class", `delete-button`);
            newItem.appendChild(deleteButton); 
    }
}

form.addEventListener('submit', submitFunction);

//Conditional to check if you are clicking editButton => event.target.classList.contains("edit-button")
const editFunction = (event) => {
    console.log('event', event)
    event.preventDefault();
    if(event.target.classList.contains("edit-button")) {
        const listItem = event.target.parentNode;
        const listItemText = listItem.firstChild;
        listItemText.contentEditable = true;
        listItemText.style.backgroundColor = "#dddbdb";
    } else if(event.target.classList.contains("done-button")){
        const listItem = event.target.parentNode;
        const listItemText = listItem.firstChild;
        listItemText.contentEditable = false;
        listItemText.style.backgroundColor = "#ffffff";
    } else if(event.target.classList.contains("delete-button")) {
        event.target.parentNode.remove();
    } else if(event.target.classList.contains("tick-button")){
        event.target.classList.toggle("checked")
    }

};

listItems.addEventListener('click', editFunction);
*/

// OOP Version:
/* let newItem = document.createElement('li');
 let newItemText = document.createElement('div');

 let newItemContent = document.createTextNode(`${itemsInput.value}`);
 newItemText.appendChild(newItemContent);
 newItem.appendChild(newItemText);
 newItem.setAttribute('class', `item`);
 list.appendChild(newItem);
  //edit
  let editButton = document.createElement("BUTTON");
  let editText = document.createTextNode('Edit');
  editButton.appendChild(editText);
  editButton.setAttribute("class", `edit-button` );
  newItem.appendChild(editButton); 
  //done
  let doneButton = document.createElement("BUTTON");
  let doneText = document.createTextNode('Done');
  doneButton.appendChild(doneText);
  doneButton.setAttribute("class", `done-button`);
  newItem.appendChild(doneButton); 
  //tick
  let tickButton = document.createElement("INPUT");
  tickButton.setAttribute("type", "checkbox")
  tickButton.setAttribute("class", `tick-button`);
  newItem.appendChild(tickButton);
  //delete
  let deleteButton = document.createElement("BUTTON");
  let buttonText = document.createTextNode('Delete');
  deleteButton.appendChild(buttonText);
  deleteButton.setAttribute("class", `delete-button`);
  newItem.appendChild(deleteButton); */

/*const form = document.querySelector("form");
const list = document.querySelector("#listItems");
const itemsInput = form.elements['items'];
let itemsInputArray = [];

let newItem = document.createElement('li');
let newItemText = document.createElement('div')*/


/*form.addEventListener("submit", (event) => {
    event.preventDefault();
    //get ID
    let id = Math.random() * 100000;
    //create todo Item with unique ID key-value pair
    const textItem = new ListElement(id, itemsInput.value);
    //Array to store the key-value pair
    itemsInputArray = [...itemsInputArray, textItem];
    //console.log(itemsInputArray);
    TodoList.addItem();
    TodoList.clearInput()
})*/


class ListElement {
  constructor(id, text) {
      this.id = id;
      this.text = text;

  }

  /*get text(){
      return this.text;
  }
  
  set text(newText){
      this.text = newText;
   }*/
}



class TodoList {
  constructor() {
      this.items = [];
      this.form = document.querySelector("form");
      this.list = document.querySelector("#listItems");
      this.form.addEventListener('submit', this.addItem.bind(this));
      this.form.addEventListener('submit', this.clearInput.bind(this));
      this.list.addEventListener('click', this.editInput.bind(this));
      this.loadItems();
  }

  addItem(event) {
      event.preventDefault();
      const itemsInput = this.form.elements['items'];
      //get ID
      let id = Math.random() * 100000;
      //create todo Item with unique ID key-value pair
      const todo = new ListElement(id, itemsInput.value);

      console.log(this.items, 'this.items')
      console.log(todo, 'todo')
      if (itemsInput.value == "") {
          return alert("Please type in your successes");
      } else {
          this.items.push(todo);

          //addItem inserts the html in the DOM
          let addItem = this.items.map((item) => {
              return `<li class="item">
                      <div id="${item.id}">${item.text}</div>              
                      <button type="button" class="edit-button">Edit</button>
                      <button type="button" class="done-button">Done</button>
                      <input class="tick-button" type="checkbox"> 
                      <button type="button" class="delete-button">Delete</button>
                  </li>`;
          });
          //to get rid of the extra , due to the array
          this.list.innerHTML = addItem.join("");
          //storage
          this.saveTasks();
          //    this.loadItems();

          // const userArray = []
          // localStorage.setItem('user', JSON.stringify(userArray));
      }
  }

  clearInput(event) {
      event.preventDefault
      const itemsInput = this.form.elements['items'];
      itemsInput.value = "";

  }

  editInput(event) {
      event.preventDefault;
      //Edit Button
      if (event.target.classList.contains("edit-button")) {
          const listItem = event.target.parentNode;
          const listItemText = listItem.querySelector("div");
          //get ID
          const divId = listItemText.getAttribute('Id');
          const todoId = this.items.find(task => task.id = divId);
          //get Index and update .text in the array.
          const index = this.items.indexOf(todoId);
          this.items[index].text = listItemText.textContent;

          //storage
          const myJSON = JSON.stringify(this.items);
          localStorage.setItem(`tasks`, myJSON);

          listItemText.contentEditable = true;
          listItemText.style.backgroundColor = "#dddbdb";
          //Done Button
      } else if (event.target.classList.contains("done-button")) {
          const listItem = event.target.parentNode;
          const listItemText = listItem.querySelector("div");
          listItemText.contentEditable = false;
          listItemText.style.backgroundColor = "#ffffff";
          //Delete-Button
      } else if (event.target.classList.contains("delete-button")) {
          const listItem = event.target.parentNode;
          const listItemText = listItem.querySelector("div");
          //Extract id value from div
          const divId = listItemText.getAttribute('Id');
          console.log(divId);
          //Once you have the id from the dom stored in a variable, use find method to iterate the array of todos and find coincidence on task.id related to the id of the target element
          const todoID = this.items.find(task => task.id = divId);
          console.log(todoID);
          //remove todo by Item
          const index = this.items.indexOf(todoID);
          if (index !== -1) {
              this.items.splice(index, 1);
          }

          event.target.parentNode.remove();

          localStorage.removeItem()
          //Tick-Box
      } else if (event.target.classList.contains("tick-button")) {
          const listItem = event.target.parentNode;
          const listItemText = listItem.querySelector("div");

          event.target.classList.toggle("checked") ?
              listItemText.style.textDecoration = "line-through" :
              listItemText.style.textDecoration = "none";
      }

  };


  saveTasks() {
      const myJSON = JSON.stringify(this.items);
      localStorage.setItem(`tasks`, myJSON);
  }

  loadItems() {
      const items = localStorage.getItem("tasks");
      console.log(items, "items")

      //Parse JSON
      const parsedItems = JSON.parse(items);
      console.log(parsedItems);
      //Save localStorage data into this.items array;
      if (parsedItems !== null) {
          this.items = parsedItems;
          //Iterate array and create new element in the DOM for each one of stored objects
          let addItem = this.items.map((item) => {
              return `<li class = "item">
                   <div id="${item.id}">${item.text}</div>              
                    <button type="button"  class="edit-button">Edit</button>
                    <button type="button" class="done-button">Done</button>
                    <input class="tick-button"  type="checkbox">
                    <button type="button" class="delete-button">Delete</button>
                  </li>`;
          })
          this.list.innerHTML = (addItem).join(" ");
      }

      //to get rid of the extra , due to the array

  }
}

const myToDoList = new TodoList();



//myBookList.addItem(new ListElement);


