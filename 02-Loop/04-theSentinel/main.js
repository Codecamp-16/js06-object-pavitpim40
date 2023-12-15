// P1-ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// P2-จนกว่าจะเจอคำว่า stop ถึงหยุด [check]
// P3-สร้าง Object
// P4-log object นั้นออกมา [check]

// P2-จนกว่าจะเจอคำว่า stop
function terminate(key) {
  console.log(key === 'stop');
  return key === 'stop';
}

function isValid(text) {
  if (text === null || text.trim() === '') return false;
  return true;
}

// P4-log object นั้นออกมา [check]
function printObj(obj) {
  console.log(obj);
}

// P1-ให้เขียนโปรแกรมที่รับค่า key และ value ของ Object
// P1.5 : รับ Input ไปเรือยๆ
// P2 : จนเจอคำว่า stop ถึงหยุด [check]

function createObjectFromUser() {
  let key;
  let value;
  const object = {};

  do {
    // key
    key = prompt('Enter key');
    if (terminate(key)) break;

    // value
    value = prompt('Enter value');
    if (terminate(value)) break;
    // insert key value to object
    if (isValid(key) && isValid(value)) {
      object[key] = value;
    }
  } while (true);
  return object;
}

const obj = createObjectFromUser();

console.log(obj);
