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

let result = user.sum(5, 6);
let result2 = user.multiply(3, 4);
console.log(result);
console.log(result2);
