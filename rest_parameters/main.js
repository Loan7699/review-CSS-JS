// Rest parameters
// rest: phần còn lại
let array = ['Java', 'PHP', 'Ruby']
let [a, ...rest] = array;
console.log(a);
console.log(rest);

function logger(...params) {
    console.log(params);
}
logger(1, 2, 3, 4)

function logger1(a, ...params) {
    console.log(params);
}
logger1(1, 2, 3, 4)

// truyền 1 obj vào làm params
function logger2(obj) {
    console.log(obj.name);
    console.log(obj.price);
}
logger ({
    name: 'Java',
    price: 1000
})

function logger2({ name, ...rest }) {
    console.log(name);
    console.log(rest); // còn price và description
}
logger2({
    name: 'Javascript',
    price: 1000,
    description: "content"
})