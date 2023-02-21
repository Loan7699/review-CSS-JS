// Spread: toán tử dải. Muốn dải trước arr hay obj sẽ bỏ đi dấu ngoặc trước sau, chỉ còn phần tử
// 1. array, obj
let a = ['Java', 'PHP']
let b = ['Ruby']
// nối array a với b
let c = [...a, ...b]
console.log(c);

let x = {
    name: "Java",
}
let y = {
    price: 1000,
}
let z = {
    ...x,
    ...y
}
console.log(z);

// 2. thừa hưởng obj cũ có thay đổi
let defaultConfig = {
    api: '/abc',
    apiVersion: 'v1',
    other: 'other'
}

let setConfig = {
    ...defaultConfig,
    api: '/cde'
}
console.log(setConfig); // lấy obj cũ và câp nhật thay đổi

// chuyển string sang chuỗi
let text = 'techmaster'
console.log([...text])