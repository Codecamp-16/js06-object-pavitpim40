// Declare variable => attached window Obj
var name = 'Joe';

// Declare Function => attached window Obj
//Return Object {name:"John":ref:this}
function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser(); // Solved this == window
// user =  {name:"John":ref:this}

console.log(user.ref.name); // *
// user.ref ==> this === WINDOW
// user.ref.name ==> this.name ==> "John"
// this.name === WINDOW.name ==> "Joe"

// Object : เราไม่สามารถสร้างฟังก์ชันที่เป็น Object Factory (โรงงานผลิต Object ได้)
// มันจะไม่สามารถ Solve this ที่ถูกต้องได้
