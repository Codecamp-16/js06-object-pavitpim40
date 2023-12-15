// #1 What's JS Plain Obj
let userAge = 30;

// Banking App
// const user = {
//   "firstName" : "John",
//   "lastName" : "Doe",
//   "age" : userAge, // age:30
//   "isVIP" : false,
//   "bankAccounts" :  ["111-xxx","2222-xxx","333-xxx"],
//   "address" : {
//     "village" : "Ladda Land",
//     "province" : "Chaing mai"
//   }
// }

// *** Key == String
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: userAge, // age:30
  isVIP: false,
  'bank accounts': ['111-xxx', '2222-xxx', '333-xxx'],
  address: {
    village: 'Ladda Land',
    province: 'Chaing mai',
  },
};

// #2 Dot Notation
// GET,UPDATE,DETE (Dot Notation)

// Get <obj>.<key>
user.firstName; // John
user.lastName; // "Doe"
user.LastName; // undefined
user.age; //
user.address;
user.address.village;
user.address.province;

// let str= "codecamp"
// str.length // str มี property

// #Scenario1 : Update
// #Scenario 2 : Create newProperty  <obj>.<key> =  <new_value> | <expression>

user.firstName = 'Jane';
//user.FirstName = "Jane" // wrong key, create new one
user.age++;
user.isMarried = true;

// Delete
delete user.age;

// #3  Bracket Notation

const animal = {
  type: 'dog',
  breed: 'golden retreiver',
  age: 5,
  'can run': true,
};

// GET <obj>["key_name"]

animal['type'];
// animal.type // dog

animal['breed'];
//animal.breed // 'golden retreiver'

animal['can run'];
// animal.can run

// #4 dynamic key ,computed key (เอาตัวแปรมาเก็บ string ที่เป็นชื่อ key)

// Context : ให้ user กรอกว่าอยากรู้ property ไหน

// let searchKey = prompt("adadsadad")
let searchKey = 'type';

animal[searchKey]; // animal["type"] == "dog"
animal.searchKey; // undefined

// #5 in operator
// <key> in <obj>
'type' in animal;
'breed' in animal;
'bankAccount' in animal;
