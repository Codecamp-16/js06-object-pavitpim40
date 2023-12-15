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

// ############ Property Shothand => ใช้ชื่อตัวแปร แทน key-value pair
// ชื่อตัวแปรจะเป็นชื่อ key
// ค่าที่เก็บเก็บในตัวจะเป็น value

const user1 = {
  firstName: 'John',
  age: 30,
};

let firstName = 'John';
let age = 30;
let isAdmin = false;

const user2 = {
  firstName,
  age,
  isAdmin,
};

console.log(user2);

//######  in Operator

'firstName' in user2;
'age' in user2;
'isVip' in user2;

const loginObj = {
  username: 'gggg@gmai.com',
  // password: "1234",
  confirmPassword: '1234',
};

// "password" : string
//  password : variable

let check = 'password';
if (!(check in loginObj)) {
  console.log('Error');
}
