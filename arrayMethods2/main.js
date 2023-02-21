// 1. map(): duyệt qua các phần tử của mảng, thực hiện thao tác với từng phần tử, trả về mảng mới có độ dài bằng ban đầu

const res = (arr) => (arr.map((e) => e % 2));
console.log(res([3, 4, 5, 7, 9]));

// 2. filter(): lặp qua các phần tử của mảng, lọc các phần tử thỏa mãn điều kiện => trả về mảng các phần tử đó
const filter = (array) => (array.filter(e => e % 2 == 0))
console.log(filter([3, 4, 5, 7, 9]));

// 3. reduce(): lặp qua mảng thực hiện các thao tác

// 4. find(): lặp qua các phần tử của mảng, trả về phần tử đầu tiên thỏa mãn
// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}
console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// 5. findIndex(): giống find() nhưng trả về chỉ số của phần tử thỏa mãn điều kiện
// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5

function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 2);
}
console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

// 6. some(): lặp qua các phần tử kiểm tra điều kiện. Nếu có ít nhất 1 phần tử tm => true, ngược lại false
// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5
// Kiểm tra xem có giá trị nào trong mảng có lớn hơn 1 không?

function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}
console.log(getNumberGreater1([1, -2, 3, -4])); // true

// 7. every(): lặp qua các phần tử kiểm tra điều kiện. Nếu tất cả các phần tử tm => true, ngược lại có ít nhất 1 phần tử ko tm => false
function getNumberGreater2(arr) {
    return arr.every((e) => e > 1);
}
console.log(getNumberGreater2([-5, 2, 3, 4]));

