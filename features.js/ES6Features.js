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
let name = "John";
function person(val){
    console.log("Name",val);
}
person("Atikur");

// Pass By reference
let array = [10,20,30,40,50];
function add(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        array[i] = element*element;
    }
    console.log(array);
}
console.log(add(array));