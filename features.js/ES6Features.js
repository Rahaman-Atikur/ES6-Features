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

//? Scope(Global,function,Block Scope)
//const firstName = "John";
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
function greet(val,fn){
    console.log("Hello World",val);
    
    
}
// Callback functions
function anotherFun(){
    console.log("Its okay ");
}
greet(12,anotherFun());