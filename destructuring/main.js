// destructuring (phân rã)
let array = [1, 2, 3]
let [a, b, c] = array
console.log(a, b, c);

// lấy phần tử đầu và cuối
let [d, , e] = array
console.log(d, e);

// obj: lấy ra cả value của name và price
let course = {
    name: 'Java',
    price: 1000,
    img: 'picture'
}
let {price, img} = course // gọi đúng key của obj
console.log(img, price);


// khi obj có key trùng nhau
let myCourse = {
    name: 'Java',
    price: 1000,
    img: 'picture',
    children: {
        name: 'ReactJS'
    }
}
let {name, children} = myCourse
console.log(name, children);
let {name: parentName, children: {name: childrenName}} = myCourse
console.log(parentName, childrenName);