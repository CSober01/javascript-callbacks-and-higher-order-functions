//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  return score > 70;
}

function atLeastFive(array, operation) {
  let passedCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      passedCount++;
    }
  }

  return passedCount >= 5;
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
   checkGradeOver70
   จุดสังเกต: มันถูกส่งเข้าไปเป็น argument ของ atLeastFive
   (parameter ชื่อ operation) แล้วถูกเรียกใช้ทีหลังจากภายใน atLeastFive
   ไม่ได้ถูกเรียกตรง ๆ ด้วยวงเล็บตอนส่งเข้าไป

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
   atLeastFive
   จุดสังเกต: มันรับฟังก์ชันอื่น (operation) เข้ามาเป็น parameter
   ฟังก์ชันที่รับฟังก์ชันเป็น argument หรือ return ฟังก์ชันออกไป
   เรียกว่า Higher Order Function

====================================
*/
