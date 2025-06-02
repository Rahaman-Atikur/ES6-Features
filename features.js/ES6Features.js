// Primitive and Non Primitive Data
// Primitive  Data Types
// const name = "Atikur";
// const is = 10;
// Non Primitive Data Type
// let array=[10,20,30,40,50];
// let myObject = {
//     name:"Programming",
//     id: 77,
//     location: "London"
// }

// Pass By value and Pass by reference
// let name = "John";
// function person(val) {
//   console.log("Name", val);
// }
// person("Atikur");

// Pass By reference
// let array = [10, 20, 30, 40, 50];
// function add(array) {
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     array[i] = element * element;
//   }
//   console.log(array);
// }
// console.log(add(array));

// var and let
// function main() {
//   var x = 10;
//   if (x === 10) {
//     const y = 20;
//     console.log(x + y);
//   }
//   console.log(y);
// }
// main();

// ? Scope(Global,function,Block Scope)
// const firstName = "John";
// function scope
// function add() {
//   let age = 20;
//   console.log(age);
//   function modify() {
//     let isMarried = false;
//     console.log(age + 20, isMarried);
//   }
//   isMarried = true;
//   console.log("His material status is", isMarried);
//   modify();
// }
// add();

// Block Scope
// const isStudent = true;
// function modifyStudent(ans){
//     let courseAccess = true;
//     if(ans){
//          let supportSessionAccess = "available";
//          console.log(courseAccess,supportSessionAccess);
//     }
// }
// modifyStudent(isStudent);

// Higher Order and
// function greet(val,fn){
//     console.log("Hello World",val);

// }
// Callback functions
// function anotherFun(){
//     console.log("Its okay ");
// }
// greet(12,anotherFun());

// function calculator(firstValue,secondValue,operator,calculatorFunction){
//     // call back function
//     add(firstValue,secondValue);
// }
// function add(firstValue,secondValue){
//    console.log(firstValue+secondValue);
// }
// function subs(firstValue,secondValue){
//     console.log(firstValue-secondValue);
// }
// calculator(10,20,'+',add);

// Default Function parameter
// function greet(name="Guest"){
//     console.log(name);
// }
// greet();

// Template Literal
// let firstName = "Shuvo";
// let lastName = "Rahaman";
// console.log(firstName + lastName);
// console.log(`${firstName} ${lastName}`);

// DOM application
// let user = {name:"Shuvo",age:23};
// let person = `user name:${user.name} user age:${user.age}`;
// document.body.innerHTML=`<h1>${person}</h1>`

// Arrow Function
// let add = x=>x*x;
// console.log(add(5));
// parameter
// let multiLine = (x,y) =>{
//    return x*y;
// }
// console.log(multiLine(5,6));
// // No parameter
// let showMessage=()=>console.log("NO Entry");

// console.log(showMessage());

// Spread and Rest Methods

// let arrayOne = [10,20,30,40,50];
// let arrayTwo = [...arrayOne,79];
// console.log(arrayTwo);

// let user = {name:"Atikur", id:23};
// let newUser = {...user,role:"Admin"};
// console.log(newUser);

// Rest Methods

// function sum(...numbers){
//     console.log(numbers);
// }
// sum(12,13,15);
// sum(12,13,15,18,33,22,48);

// Destructuring Array and Object
// let numbers = [10, 20, 30, 40, 50];
// let [first, second, ...rest] = [10, 20, 30, 40, 50];
// console.log(first, second, rest);

// // Object Destructuring
// let person = {
//     name:"Atik",
//     age:24,
//     profession:"Programmer"
// }
// let {name: personName,age,jobStatus=false} = person;
// console.log(personName,age,jobStatus);

// Object Properties and Method
// let Person = {
//     name:"Ali",
//     age:25,
//     city:"Dhaka",
//     // Function Method
//     greet:function(){
//         return `Hello ${this.name}`;
//     }
// }
// Person.name="Atikur";
// console.log(Person);

// Array Methods
// Map
// const numbers = [2,3,4,5,6];

// const result = numbers.map((item)=>item*2);

// console.log(result);

// Filter Methods
// let myArray = [1, 2, 3, 4, 5];
// let onlyEven = myArray.filter((item) => {
//   if (item % 2 === 0) {
//     return item;
//   }
// });
// console.log(onlyEven);

// Find Methods

// For Each Methods

// let array = [10, 20, 30, 40, 50];
// let showingArray = array.forEach((item)=>console.log(item));

// Reduce Methods

let array  = [10,20,30];
let total = array.reduce((acc,current)=>{
    let result = acc + current;
    console.log(acc,current);
    return result;

},0);
console.log(total);

