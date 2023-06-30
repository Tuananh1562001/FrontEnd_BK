// alert(new Date().getDate())
var a = 10
var b = 11
var c = a + b
var d = a - b
var e = a * b
var f = a / b

console.log("Giá trị của c là: " + c)
console.log("Giá trị của d là: " + d)
console.log("Giá trị của e là: " + e)
console.log("Giá trị của f là: " + f)

// vòng lặp
for (let i = 0 ; i <3 ; i++){
    console.log("run in for" + i)
}


// câu điều kiện

// let age = 18

// if (age < 13){
//     console.log("Trẻ con")
// } else if (age >= 13 && age < 18){
//     console.log("Vị thành niên")
// } else{
//     console.log("Đủ tuổi đi tù")
// }

// Ví dụ 1
var name = "Tuấn Anh"
var age = 18

console.log( name == "Ngọc" && age == 18 ? "Đủ điều kiện" : "Không đủ điều kiện")

// ví dụ 2
// let number = ""
// for (let i = 0; i < 50; i++){
//     if (i % 2 == 0){
//         number = number + ' ' + i
//     }
// }
// console.log("Các số chẵn nằm trong khoảng là: " + number)

// Ví dụ 3

// let number = 0
// for (let i = 0; i < 50; i++){
//     if (i % 2 == 1){
//         number = number + i
//     }
// }
// console.log("Tổng số lẻ nằm trong khoảng là: " + number)

// ví dụ 4

let n = 6
let sum = 0
for (let  i = 0; i <= n; i ++){
    sum += i*i
}
console.log(sum)