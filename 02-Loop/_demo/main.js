const user = {
  firstName: 'Jame',
  lastName: 'Doe',
  age: 30,
  isAdmin: true,
};

// 1st :  searchKey = "firstName"
// 2nd :  searchKey = "lastName"
// 3rd :  searchKey = "age"
// 4th :  searchKey = "isAdmin"

// For in  ทำให้
// 1.จะ loop ตามจำนวน key
// 2. auto reassign ตัวแปร <key_name> ให้ใหม่ในทุกๆรอบ

// ใช้ computed key, dynamic key
for (let searchKey in user) {
  console.log('SEARCH KEY :', searchKey); // variable ที่เก็บ string <key_name>
  console.log('value By Dot', user.searchKey);
  console.log('value by []', user[searchKey]);
}
