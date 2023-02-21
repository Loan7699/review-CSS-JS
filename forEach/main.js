// duyệt qua các phần tử của mảng
let array = [1, 2, 3, 4, 5]
array.forEach((ele, index) => {
    if (ele > 2) {
        console.log(ele);
    }
})

array.forEach((ele, index) => {
    if (index > 2) {
        console.log(ele);
    }
})