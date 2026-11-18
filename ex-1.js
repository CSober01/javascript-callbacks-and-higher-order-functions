// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  return previousSalary + 5000;
}//return เงินเดือนที่เพิ่มจากเดิม5000

function forEach(array, operation) {
  let newSalary = []
  for (let i = 0; i < array.length; i++) {
    newSalary.push(operation(array[i]))
  }
  return newSalary
}//return ค่าarray ใหม่

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries,addSalary5000)

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?

====================================
*/

