// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  return previousSalary + 5000;
}

function forEach(array, operation) {
  let newSalary = [];

  for (let i = 0; i < array.length; i++) {
    newSalary.push(operation(array[i]));
  }

  return newSalary;
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
addSalary5000
จุดสังเกต เป็น function ที่ถูกส่งไปให้ function forEach ใช้งาน

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
// forEach
จุดสังเกต เป็น function ที่รับ function addSalary5000 เป็น Argument หรือ Return ฟังก์ชันอื่นกลับมา
====================================
*/
