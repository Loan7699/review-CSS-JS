let obj1 = {
    name: "Phuong Loan",
    age: 23
}

// lấy ra value của obj
console.log(obj1.name);
console.log(obj1['name']);
console.log(obj1['age']);

// thay đổi thuộc tính obj
obj1.email = "loan.ttp174487"
console.log(obj1);

// xóa thuộc tính obj
delete obj1.email
console.log(obj1);

// Một số phương thức của obj
// lấy Ds key của obj
console.log(Object.keys(obj1));

// lấy DS value của obj
console.log(Object.values(obj1));

// ktra 1 key có nằm trong obj1 ko
console.log(obj1.hasOwnProperty('age'));
console.log(obj1.hasOwnProperty('email'));

// lặp for...in qua từng thuộc tính của obj
// lấy ra value của obj
let keys = Object.keys(obj1)
for ( let i = 0; i < keys.length; i++ ) {
    console.log(obj1[keys[i]]);
}

// cách 2
for ( const key in obj1 ) {
    console.log(obj1[key]);
}