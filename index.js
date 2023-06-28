//getElementById

const myId = document.getElementById("primaryTitle");

myId.style.backgroundColor = 'yellow';
myId.style.color = 'red';
myId.innerText = ' It is DOM Manipulation';

//getElementsByTagName
const myButtonsTagName = document.getElementsByTagName("button");
console.log(myButtonsTagName)

//getElementsByClassName => HTML Collection
const myParagraphsClassName = document.getElementsByClassName("container");
console.log(myParagraphsClassName[0])

//Iterate HTML Collection
Array.from(myButtonsTagName).forEach(selector => 
    (selector.style.backgroundColor = 'yellow'));

//querySelectorAll
const myParagraphs = document.querySelectorAll("p");
console.log(myParagraphs[0])
//Iterate Node List => querySelectorAll
myParagraphs.forEach(selector => 
  (selector.style.backgroundColor = 'yellow'));

//Create new element 
const myList = document.querySelector(".myList");

myList.innerHTML += `
    <li>first element</li> 
    <li>second element</li>
`;

const listElement = document.createElement("li");
listElement.innerText = 'hello from js';
listElement.classList = 'classFromJs';
listElement.style.fontWeight = 'bold';

//Append new element to parent 
myList.appendChild(listElement);

//Delete new element 
listElement.remove()

//Event listeners
const myButton = document.querySelector('button');

myButton.addEventListener("click", () => {
    console.log('clicked');
})

myButton.addEventListener("mouseover", () => {
    myButton.innerText = 'Click me';
})

myButton.addEventListener("mouseout", () => {
    myButton.innerText = 'Contact button';
})

