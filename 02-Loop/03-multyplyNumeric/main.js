// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object
// คูณเฉพาะ value ที่เป็น number เท่านั้น

// ```js
// // before
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu'
// };

// // after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };
// ```

// Solution for 1 Object
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// const NUM = 3;

// for (let key in menu) {
//   if (typeof menu[key] === 'number') {
//     menu[key] = menu[key] * 3;
//   }

//   // 1st :
//   // menu["width"] =  menu["width"]  * 3
//   // menu["width"] = 200 *3

//   // 2nd :
//   // menu["height"] =  menu["height"]  * 3
//   // menu["height"] = 300 *3

//   // 3rd :
//   // menu["title"] =  menu["title"]  * 3
//   // menu["title"] = "My menu" *3 ==> NaN
// }

// console.log(menu);

// ## Solution for Any Object
// General Using

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj, num) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * num;
    }
  }

  return obj;
}

console.log(multiplyNumeric(menu, 3));
console.log(multiplyNumeric({ a: 100, b: 200 }, 5));
console.log(multiplyNumeric({ a: 100, b: 200 }, 10));
