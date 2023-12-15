// method (ความสามารถของ Object, key ที่มี value เป็น function)
// this keyword

// EX.1
// const developer = {
//   name: 'John', // property-1
//   position: 'fullStack', // property-2
//   height: '175CM',
//   dev: function () {
//     console.log('I creating an amazing website');
//   },

//   sleep: function () {
//     console.log('I sleep for 18 hour');
//   },
// };

// ACCESS PROPERTY : <obj>.<property>
// console.log(developer.name);
// console.log(developer.position);
// console.log(developer.height);

// ACCESS METHOD :  <obj>.<method>()
// developer.dev();
// developer.sleep();

// EX.2
// const user = {
//   name: 'John',
//   // method เขียนแบบปกติ
//   say: function (phrase, name) {
//     console.log(`${phrase} ${name}`);
//   },
//   sum: function (x, y) {
//     return x + y;
//   },
//   // method เขียนแบบ shorthand
//   multiply(x, y) {
//     return x * y;
//   },
// };
// user.say('Hello', 'Jane');
// user.say('Hi', 'Jame');
// user.say('Hey Bro!!!', 'Jim');
// user.say('Supp !!', 'Jod');

// let result = user.sum(5, 6);
// let result2 = user.multiply(3, 4);
// console.log(result);
// console.log(result2);

// ## Ex3 (this Keyword) => คำกำกวม​​ (ต้องมีการตีความ)

function sayHi() {
  console.log(this); // this จะไม่มีทางรู้ว่าคืออะไร จนกว่าจะรู้ context
}

const user1 = {
  name: 'John',
  age: 30,
  sayMyName: sayHi,
};

const user2 = {
  name: 'Jay',
  sayMyName: sayHi,
};

// shallow : this == หมายถึงตัว Object เอง (Self)
// deeper  : this == object before the dot
// deepest : this == Execution Context (Caller Object)
// user1.sayMyName(); // this === user1
// user2.sayMyName(); // this === user2
// window.sayHi(); // this === window (caller object)
// sayHi(); // this === window (caller object)

// SYNTAX : <object_context>.<method> => this == object_context

// Ex4 : this (in action)

const todoList = {
  list: [],
  addTodo: function (newTodo) {
    this.list.push(newTodo);
    //todoList.list.push(newTodo)
  },
  finishTodo: function () {
    this.list.shift();
  },
};

console.log(todoList);
todoList.addTodo('Do HW'); // this == todoList
todoList.addTodo('Travel'); // this == todoList

console.log(todoList);

todoList.finishTodo();
console.log(todoList);

todoList.finishTodo();
console.log(todoList);
