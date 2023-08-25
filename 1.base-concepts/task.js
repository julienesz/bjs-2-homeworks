//1
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d))/(2*a);
    arr[1] = (-b - Math.sqrt(d))/(2*a);
  } else if (d === 0) {
    arr[0] = -b/(2*a);
  }
  return arr;
}
console.log(solveEquation(1, 5, 4));

//2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthRate = percent / 100 / 12;
  const creditBody = amount - contribution;
  const monthPayment = creditBody * (monthRate + (monthRate / (((1 + monthRate)**countMonths) - 1)));
  const totalPayment = monthPayment * countMonths;
  return Number(totalPayment.toFixed(2));
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));