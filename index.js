//Function declaration
function functionName(){
 return 'abc'
}
//Function invokation
console.log(functionName())


//Function declaration with parameters
function calculateArea(length, width){
  return length * width
}
 //Function invokation with parameters
console.log(calculateArea(5, 5))

 //Function declaration with default parameters
function calculateArea(length = 6, width = 10){
  return length * width
}
 //Function invokation with default parameters
 console.log(calculateArea(7, 7))

 console.log(helloFunctionDeclaration('Núria')) 
 function helloFunctionDeclaration(name = 'John Doe') {
  return `Hello ${name}`;
 }
 
 //Anonymous FUNCTIONS
 setTimeout(function() {
  //console.log('This function is gonna be executed after a delay')
 }, 4000)


 //Arrow functions
 const helloArrow = (name) => {
  return `Hello ${name}`;
 }

 console.log(helloArrow('Núria'))

 const helloArrowAbstracted = (name) => `Hello ${name}`;
 
//Recursive functions

const factorial = function (number) {
  if (number <= 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
 };
 
 console.log(factorial(6));
