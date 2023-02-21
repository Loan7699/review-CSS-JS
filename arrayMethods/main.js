const array = [
    "Java",
    "PHP",
    "Dart"
]
// 1. toString(): chuyển từ array sang string, ko chỉ định được dấu phân cách
console.log(array.toString());

// join(): được chỉ định dấu phân cách
console.log(array.join("_"));

// 2. pop(): xóa phần tử cuối cùng ra khỏi mảng, trả về phần tử đã xóa, làm thay đổi mảng ban đầu
console.log(array.pop()); // Dart
console.log(array);
// push(): thêm 1 or nhiều phần tử vào cuối mảng, trả về độ dài mảng mới
console.log(array.push("Dart"));
console.log(array);

// 3. shift, unshift
// shift: xóa 1 phần tử ở đầu mảng, trả về phần tử đã xóa, thay đổi mảng ban đầu
console.log(array.shift());
console.log(array);

// unshift: thêm 1 hoặc nhiều phần tử vào đầu mảng, trả về độ dài mảng, làm thay đổi mảng ban đầu
console.log(array.unshift("Java"));
console.log(array);

// 4. splice: xóa phần tử bất kì trong mảng => trả về mảng gồm phần tử đã xóa / chèn 1 phần tử bất kì vào mảng
// 1: số chỉ của phần tử muốn xóa, 2: số phần tử muốn xóa
console.log(array.splice(1, 2));
// chèn
console.log(array.splice(1, 0, "PHP", "Ruby"));
console.log(array);

// 5. concat: nối 2 mảng => trả về mảng mới
let a = ["Phuong"]
let b = ["Loan"]
console.log(a.concat(b));

// 6. slice: cắt 1 vài hoặc toàn bộ phần tử => trả về mảng gồm các phần tử đã cẳt
// 1: vị trí bđ cắt, 2: vị trí KT
console.log(array.slice(1));

// 7. reverse(): đảo ngược array => ghi đè mảng ban đầu
console.log(array.reverse());

// 8. sort(): sắp xếp tăng dần => mảng sắp xếp
console.log(array.sort());

// 9. indexOf: tìm chỉ mục đầu tiên của giá ttri cần tìm, ko có trả về -1, có thể truyền vào gtri cần tìm và vị trí bđ tìm kiếm
console.log(array.indexOf("Java"));
console.log(array.indexOf("ReactJS"));

// lastIndexOf(): trả về chỉ mục cuối cùng của gtri cần tìm

// 10. includes(): trả về true nếu mảng chứa giá trị, ngược lại là false
console.log(array.includes("PHP"));
console.log(array.includes("ReactJS"));