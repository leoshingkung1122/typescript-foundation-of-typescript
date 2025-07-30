function sumEvenNumbers(numbers: number[]): number {
  //Start Coding Here
  let evenNumbers:number[] = numbers.filter((num) => num % 2 === 0);
  let result:number = evenNumbers.reduce((acc, curr) => acc + curr, 0);
  return result;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumEvenNumbers([11, 13, 15])); // 0
