function addMessage(message, me = true) {
  const template = `<div class="message">
    <div class="${
      me ? "myMessage" : "fromThem"
    }" data-date="${new Date().toLocaleTimeString()}">
      <p>${message}</p>
      <date> ${new Date().toLocaleTimeString()} </date>
    </div>
  </div>`;

  document.querySelector(".chat .messages").innerHTML += template;
}

function typing() {
  document.querySelector(".typing").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".typing").classList.toggle("active");
  }, 1000);
}

typing();
addMessage("Hi!", false);
addMessage("In this exercise you will work with events in JS", false);
addMessage("Let's go!");
// Call the function initially
addEventListenersToMessages();

/**
 * Listen to the submit of the form and add a new message
 * with addMessage()
 */

// Code here

document.querySelector(".chat").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("input[type='text']");
  const message = input.value;
  if(input.value.trim() == ""){
    alert("please enter a message")
  } else {
    addMessage(message, true);
    input.value = "";

    //Call the function to add event listeners to the updated messages
    addEventListenersToMessages();

  }
})

/**
 * Listen to the click on each message and create an alert
 * with the date from 'data-date'
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

// Code here

function addEventListenersToMessages() {
  const messages = document.querySelectorAll(".myMessage");
  messages.forEach((message) => {
    message.addEventListener("click", function () {
      const date = this.getAttribute("data-date");
      alert(date);
    });
  });
}

// const messages = document.querySelectorAll(".chat .messages .message");
// messages.forEach((message) => {
//   message.addEventListener("click", () => {
//     const date = document.querySelector("[data-date]").getAttribute("data-date");
//     console.dir(date, 'date')
//     alert(date);
//   })
// })



/**
 * Listen to every Keydown (from the keyboard) in the input and call
 * the function typing()
 */
// Code here
const input = document.querySelector("input[type='text']");
input.addEventListener("keydown", typing )