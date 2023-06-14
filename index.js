// // Displaying messages
// console.log("hello world");

// //Debugging
// const x = 5;
// console.log('The value of x is:', x);

// //Interact with js
// console.log(2 + 2);

// //Different console methods
// console.warn('this is a warning');
// console.error('this is an error');
// console.info('this is an info message');


// const quantity = null;
// let moreQuantity;

// console.log(quantity); // Output null
// console.log(moreQuantity); //Output undefined

// //Let vs var

// var pikachu = "pikachu";
// let jigglypuff = "jigglypuff";

// console.log(pikachu); // pikachu
// console.log(jigglypuff); // jigglypuff

// if (true) {
//  var pikachu = "I don't know who I am anymore :(";
//  let jigglypuff = "I don't know who I am anymore :(";

//  console.log(jigglypuff); 
// }

// console.log(pikachu); // I don't know who I am anymore :(
// console.log(jigglypuff); // jigglypuff

// //GLOBAL VS FUNCTION SCOPE

// let someVariable;

// if(true){
//     someVariable = 'else';
// } 

// console.log(someVariable)

//If/else statements

//const number = 5;

// if (number === 2) {
//     console.log('the value is 2')
// } else if (number === 3) {
//     console.log('the value is 3')
// } else if (number === 5) {
//     console.log('the value is 5')
// } else {
//     console.log('I do not know this value :(')
// }

//Ternaries
// const number = 5;
// const message = number === 5 ? 'the number is 5' : 'I do not know this number';
// console.log(message) // the number is 5

// Switch statements

// const pokemon = 'Pikachu';

// switch (pokemon) {
//  case 'Pikachu':
//    console.log('We restored your Pikachu to full health!');
//    break;
//  case 'Squirtle':
//  case 'Magikarp':
//    console.log('We restored your water pokemon to full health!');
//    break;
//  default:
//    console.log('Sorry, we cannot heal your pokemon :(');
// }

//Arrays

//const pokemon = ['Pikachu', 'Squirtle', 'Charmander']
// console.log(pokemon[0]) // Pikachu

// const reversePokemon = pokemon.reverse();
// console.log(reversePokemon) // ['Charmander', 'Squirtle', 'Pikachu']

//Functions

// function talk () {
//     console.log('I have no mouth, and I must scream');
//     console.log('I have no mouth, and I must scream');
//     console.log('I have no mouth, and I must scream');
// }

// talk();
   
// function talkDynamic (message, pokemon) {
//     console.log('Hello' + '' + message + ' ' + pokemon);
// }

// talkDynamic('greetings', 'pikachu');
// talkDynamic('welcome', 'to class');
   

//Loops

//FOR

// for (let i = 2; i < 10; i++) {
//     console.log(i, 'foor lop');
// }

//const pokemon = ['Pikachu', 'Squirtle', 'Charmander', 'Charmander'];


// console.log(pokemon[0])
// console.log(pokemon[1])
// console.log(pokemon[2])

//Increase per 1 

// for (let i = 0; i < pokemon.length; i++) {
//     console.log(`I encountered ${pokemon[i]} pokemon so far`);
// }

//Increase per 2 

// for (let i = 0; i < pokemon.length; i += 2) {
//     console.log(`I encountered ${pokemon[i]} pokemon so far`);
// }
  

//WHILE
//Checks condition before iteration

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

//DO WHILE
//Checks condition after iteration

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

//FOR EACH == FOR LOOP

// const numbers = [1, 2, 3, 4, 5, 8, 10, 11];

// numbers.forEach((whatever, index) => {
// console.log(`Element at index ${index} is ${whatever}`);
// console.log('Element at index ' + index +  ' is ' + whatever);
// });