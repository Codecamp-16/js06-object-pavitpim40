var name = 'Joe';
/* 
{
	name : <string>
	age : <number>
	isAdmin : false
}
*/

// Problem ต้องการสร้าง Object จำนวนมาก
// HardCode อาจจะสร้างผิด

// let user1 = { name: 'John', age: 30 };
// let user2 = { name: 'Jane', age: 20 };
// let user3 = { name: 'Noon', age: 27 };
// let user4 = { name: 'Bow', age: 28 };
// let user5 = { name: 'Jame', age: 15 };

// Solution : ฟังก์ชันที่เป็น Blueprint
// function User(name, age) {
// this = {}

// this.name = name; // {name:"John"}
// this.age = age; // {name:"John", age:30}
// this.isAdmin = false; // {name:"John", age:30, isAdmin:false}
// return this (Implicit return)
// }

// const user1 = new User('John', 30); // this =  {name:"John", age:30, isAdmin:false}
// const user2 = new User('Jane', 25); // this = {name:"Jane", age:25, isAdmin:false}

// console.log(user1);
// console.log(user2);

// Example-2
// function TodoList() {
//   this.list = [];
//   this.addTodo = function (todo) {
//     this.list.push(todo);
//   };
//   this.removeTodo = function () {
//     this.list.unshift();
//   };
// }
// const todoList = {
//   list: [],
//   addTodo: function (newTodo) {
//     this.list.push(newTodo);
//   },
//   finishTodo: function () {
//     this.list.shift();
//   },
// };

// const todoList = new TodoList();
// const todoList2 = new TodoList();

// console.log(todoList);

// todoList.addTodo('HW JS');
// console.log(todoList);

// ### CLASS

// สร้าง Blueprint
class Employee {
  // default properties
  isCEO = false;
  salary = 0;

  // method (run 1 time == เมื่อใช้ new keyword)
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  // default method
  working() {
    console.log(`${this.name} working`);
  }
  talking() {
    console.log(`${this.name} talking`);
  }
}

// สร้าง Instance (ใช้งาน Blue print)
const user1 = new Employee('John', 300_000);
const user2 = new Employee('Jane', 200_000);
const user3 = new Employee('Jame', 200_000);

// console.log(user1);
// user3.working();
// user3.talking();

class Developer extends Employee {
  skills = [];
  // constructor
  constructor(name, salary, skills) {
    // Property ของ Employee
    super(name, salary); // เรียก Constructor ของตัวที่มัน Extend มา

    // Custom Property ของ Dev
    this.skills = skills;
  }

  // Custom Method ของ Dev
  dev() {
    console.log(`${this.name} creating some website`);
  }
  // Override Method working ที่อยู่ใน class Employee
  working() {
    console.log(`${this.name} CODING`);
  }
}

const dev1 = new Developer('9-Nia', 400_000, ['HTML', 'CSS', 'JS']);

console.log(dev1);
dev1.dev();
dev1.working();
// dev1.talking();
