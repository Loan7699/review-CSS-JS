// 1. định nghĩa key: value cho obj
const name = 'Java'
const price = 1000

const course1 = {
    // myName: name,
    // myPrice: price
    // name và value trùng nhau
    name,
    price,
}
console.log(course1);

// 2. định nghĩa method cho obj
const course2 = {
    name,
    getName() {
        return name
    }
}
console.log(course2.getName());

// 3. định nghĩa key cho obj dưới dạng biến
let Name = 'name'
let Price = "price"

const course3 = {
    [Name]: 'Java',
    [Price]: 1000
}
console.log(course3);
