const forms = document.querySelectorAll("form");

forms.forEach((form) =>
  form.addEventListener("submit", (e) => e.preventDefault())
);

// Here are all DOM elements you need

const resultsDiv = document.querySelector(".results");
const keyInput = document.querySelector(".key");
const valueInput = document.querySelector(".value");
const removeInput = document.querySelector(".remove");
const storeBtn = document.querySelector(".store");
const showBtn = document.querySelector(".show");
const clearOneBtn = document.querySelector(".clearOne");
const clearAllBtn = document.querySelector(".clearAll");


//console.log(localStorage)

//Add items to localStorage with the "Store me" button
storeBtn.addEventListener("click", () => {
    const key = keyInput.value;
    const value = valueInput.value;
    localStorage.setItem(key, value);
    keyInput.value = "";
    valueInput.value = "";
})

//Remove one specific item from localStorage with the "Clear One" button
clearOneBtn.addEventListener("click", () => {
    const key = removeInput.value;
    localStorage.removeItem(key);
    removeInput.value = "";
})

//Show all items in localStorage with the "Show Storage" button
showBtn.addEventListener("click", () => {
   for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const item = document.createElement("p");
    item.textContent = `${key}: ${value}`;
    resultsDiv.appendChild(item);
   }
})

//Clear localStorage with the "Clear All" button

clearAllBtn.addEventListener("click", () => {
    localStorage.clear();
 })