// ให้คำนวณผลรวมของ salaries ใน object ที่มี property แบบด้านล่าง
// ถ้า object เป็น object ว่าง ให้ return ค่าผลรวมเป็น 0

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

// #### for 1 Object==Salaries
// let sum = 0;

// for (let name in salaries) {
//   // salaries["John"] , salaries["Ann"], salaries["Pete"]
//   sum += salaries[name];
// }

// console.log(sum);

// ##### For Any Object

function calSalariesByObj(object) {
  let sum = 0;

  // Start : Logic SUM
  for (let name in object) {
    sum += object[name];
  }
  // End : Logic SUM
  return sum;
}

console.log(calSalariesByObj({}));
console.log(calSalariesByObj({ John: 130 }));
console.log(calSalariesByObj({ John: 200 }));
console.log(calSalariesByObj(salaries));
