// biến là định danh để lưu trữ dữ liệu
// khai báo biến: let/const/var

// có 3 lọai function
// 1. declaration fucnction
function message1(params) {
    console.log("Message1");
}
message1()

// 2. expression function
// hàm có thể gán cho biến
// truyền vào làm tham số cho hàm khác
// có thể trả về từ function khác
const message2 = function(params) {
    console.log("Message2");
}
message2()

// 3. Arrow function
// ko cần viết "function"
const sum1 = (a, b) => {
    return a + b
}
console.log(sum1(1,2));

// khi trong function chỉ có 1 câu lệnh: bỏ return, sau => là return
const sum2 = (a, b) => a + b
console.log(sum2(1,2));

// muốn trả về 1obj sau, code sau mũi tên hiểu là return
const obj = (a, b) => ({
    a: a,
    b: b
})
console.log(obj(1, 2));

// khi chỉ truyền vào 1 tham số bỏ ngoặc
const sum3 = a => a*2
console.log(sum3(2));

// arrow func: ko có context của nó
const course = {
    name: "Java",
    getName: () => this.name
}

console.log(course.getName);