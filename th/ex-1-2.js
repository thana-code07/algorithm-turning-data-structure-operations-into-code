/* 
ให้เขียน Function ที่ชื่อว่า sumOddNumber ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 1 ตัวคือ numbers
        1. numbers เป็น Array ที่บรรจุตัวเลข
    - Function นี้จะนำ numbers มาเลือกเฉพาะสมาชิกที่มีคุณสมบัติด้านล่างมาหาผลรวม  แล้ว Return ค่าออกมา
        - เป็นเลขคี่
        - หารด้วย 3 หรือ 5 ลงตัว
        - หารด้วย 11 ไม่ลงตัว
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

function sumOddNumber (numbers) {
    return numbers.filter((number) => number % 2 !==0 &&(number % 3 === 0 || number % 5 === 0) && number % 11 !== 0).reduce((acc, num) => acc + num, 0);
}

const numbers1 = [1, 2, 3, 5, 6, 8, 11, 13];
console.log(sumOddNumber(numbers1)); // 8 จาก [3, 5]

const numbers2 = [6, 8, 10, 15, 11, 19, 21, 20, 33, 55];
console.log(sumOddNumber(numbers2)); // 36 จาก [15, 21]
