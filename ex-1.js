// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  return previousSalary + 5000;
}

function forEach(array, operation) {
  const newSalaries = [];

  for (let i = 0; i < array.length; i++) {
    newSalaries.push(operation(array[i]));
  }

  return newSalaries;
}

// Using `forEach` function here

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
   addSalary5000
   จุดสังเกต: มันถูกส่งเข้าไปเป็น argument ของ forEach
   (parameter ชื่อ operation) แล้วถูกเรียกใช้ทีหลังจากภายใน forEach
   ไม่ได้ถูกเรียกตรง ๆ ด้วยวงเล็บตอนส่งเข้าไป

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
   forEach
   จุดสังเกต: มันรับฟังก์ชันอื่น (operation) เข้ามาเป็น parameter
   ฟังก์ชันที่รับฟังก์ชันเป็น argument หรือ return ฟังก์ชันออกไป
   เรียกว่า Higher Order Function

====================================
*/
