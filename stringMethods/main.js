let str = "   Học JS JS tại đây!  "

// 1. Length: lấy độ dài của chuỗi
console.log(str.length);

// 2. indexOf: tìm VT của 1 ký tự xh đầu tiên nằm trong chuỗi
// có thể truyền vào 2 tham số: 1 là ký tự cần tìm, 2 là vị trí bđ tìm kiếm
console.log(str.indexOf("JS", 6));

// 3. slice: cắt chuỗi: 1 là VT bđ cắt, 2 là vị trí KT cắt
console.log(str.slice(10, 13));
// cắt từ phải sang trái đếm từ 0 lùi về số âm
console.log(str.slice((-3, -1)));

// 4. replace: 1 là kí tự cần thay thế, 2 là ký tự thay thế
console.log(str.replace("JS", "PHP"));
// muốn thay thế toàn bộ
console.log(str.replace(/JS/g, "PHP"));

// 5. convert to lower case / upper case
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// 6. trim: xóa khoảng trắng giữa 2 đầu của chuỗi
console.log(str.trim());

// 7. split: cắt 1 chuỗi thành 1 array, tham số truyền vào là điểm chung
console.log(str.split(" "));

// 8. charAt: lấy 1 ký tự từ 1 index cho trước
console.log(str.charAt(5));