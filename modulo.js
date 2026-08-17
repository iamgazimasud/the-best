// for (let num1 = 1; num1 <=100; num1++) {
//     if(num1 % 5 === 0 || num1 % 3 ===0) {
//         console.log("This is divisible by 5 and 3 - ", num1);
//     }
// }

let total = 0;

for (let num = 1; num <=50; num++) {
    if (num % 5 ===0) {
        console.log(num);
        total = total + num;
    }
}
   console.log("total: ", total)