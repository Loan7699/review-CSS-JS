// 1. Value type

let a = 1;
let b = a;
a = 2;
console.log(b); // 1 => thay đổi giá trị của a, b ko bị thay đổi
/*
+ let a = 1 => cấp 1 ô nhớ => gán giá trị ô nhớ cho biến a
Biến        Giá trị         Ô nhớ
a               1             1

+ gán a cho b => cấp 1 ô nhớ => sao chép giá trị của a gán cho b
Biến        Giá trị         Ô nhớ
a               1             1
b               1             1

+ thay đổi giá trị của a = 2 => sửa giá trị trong ô nhớ của a thành 2 => ko ảnh hg đến b
Biến        Giá trị         Ô nhớ
a               2             2
b               1             1
*/

// 2. Reference type
let user_01 = {
    name: "Nguyen Van A",
    age: 23,
};
let user_02 = user_01;
user_01.name = "Nguyen Van B";
console.log(user_02); // {name: "Nguyen Van B", age: 23} => biến user_02 bị thay đổi theo
/*
+ a => cấp 1 ô nhớ lưu giá trị biến => trả về địa chỉ ô nhớ và gán cho a
Biến        Giá trị         Địa chỉ         Ô nhớ
a            <#001>          #001            {name: "Nguyen Van A", age: 23}

+ gán a cho b => chép địa chỉ =>a và b cùng trỏ tới 1 địa chỉ ô nhớ
Biến        Giá trị         Địa chỉ         Ô nhớ
a            <#001>          #001            {name: "Nguyen Van A", age: 23}
b            <#001>          

+ thay đổi a => tìm đến ô nhớ => sửa giá trị trong ô nhớ => thay đổi a hoặc b dẫn đến biến còn lại thay đổi vì đang cùng trỏ tới 1 địa chỉ ô nhớ
a            <#001>          #001            {name: "Nguyen Van B", age: 23}
b            <#001>          

*/

// VÍ DỤ 1: tạo 1 obj mới => thêm 1 ô nhớ lưu obj
let user = {
    name: "Phuong Loan"
}

user = {
    name: "Phuong Thao",
    age: 23,
}
// có mấy ô nhớ được tạo ra ?? có 2 ô nhớ được tạo ra
/*
+ khai báo và gán user => trả về địa chỉ và gán giá trị cho biến a là <#001>
Biến        Giá trị         Địa chỉ         Ô nhớ
a            <#001>          #001            {name: "Phuong Loan"}

+ gán lại a bằng 1 obj mới => Obj mới lưu trong ô nhớ có địa chỉ là #002 => gán lại giá trị cho a là <#002>
Biến        Giá trị         Địa chỉ         Ô nhớ
a            <#002>          #001            {name: "Phuong Loan"}
                             #002            {name: "Phuong Thao", age: 23}

*/

// VÍ DỤ 2: Obj chứa obj con
const student = {
    name: "Oanh Ha",
    profile: {
        firstName: "Oanh",
        lastName: "Ha",
        age: 23,
    },
} // 

/*
Biến        Giá trị         Địa chỉ         Ô nhớ
                              #001           {firstName: "Oanh", lastName: "Ha", age: 23,}
student     <#002>            #002           {name: "Oanh Ha", <#001>}

*/

// VÍ DỤ 3:
const studentProfile = student.profile;
student.profile.age = 25;
console.log(studentProfile.age); // Output? 25

/*
+ gán student.profile cho biến mới
Biến                Giá trị         Địa chỉ         Ô nhớ
                                      #001           {firstName: "Oanh", lastName: "Ha", age: 25,}
student             <#002>            #002           {name: "Oanh Ha", <#001>}
studentProfile      <#001>            #001           {firstName: "Oanh", lastName: "Ha", age: 25,}

*/

// 3. Data types with functions
function obj1(a) {
    // Có 2 cách ko làm thay đổi obj:
    // C1: Trước khi thay đổi obj, gán obj cũ
    a = JSON.parse(JSON.stringify(a)) // biến obj thành chuỗi JSON => parse từ chuỗi JSON thành obj => tạo obj mới ở vùng nhớ mới => gán vào a => sửa obj a là sửa obj mới ở vùng nhớ mới

    // C2: dùng spread (chỉ sử dụng cho obj 1 cấp)
    // a = {...a} // tạo obj mới và dải các phần tử obj cũ vào
    // let a = obj2
    a.name = "Loan"
    console.log(a);
}

const obj2 = {
    name: "Phuong"
}
obj1(obj2) // JS khai báo ngầm trong function obj1, vì vậy thay đổi a dẫn đến thay đổi obj2
console.log(obj2); // {name: 'Loan'}


