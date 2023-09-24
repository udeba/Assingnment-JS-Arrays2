// let array = [
//   16,
//   true,
//   "8",
//   4,
//   9,
//   "6",
//   36,
//   false,
//   49,
//   9,
//   "HiCoders",
//   "false",
//   1,
//   4,
//   "true",
// ];
// let numbers = "";
// for (let numbers = 0; array <= 49; numbers++) {
//   console.log(numbers);
// }
let array = [
  16,
  true,
  "8",
  4,
  9,
  "6",
  36,
  false,
  49,
  9,
  "HiCoders",
  "false",
  1,
  4,
  "true",
];

// Create a new array with elements of type number and print it to the console.
let newArray = array.filter((item) => typeof item === "number");
console.log("New Array:", newArray);

// Print the frames of each element of the new array to the console.
let squaredArray = newArray.map((item) => Math.pow(item, 2));
console.log("Squares:", squaredArray);

// Print the square root of each element of the new array to the console.
let squareRootArray = newArray.map((item) => Math.sqrt(item));
console.log("Square Roots:", squareRootArray);

// Print the smallest element of the new array to the console.
let minElement = Math.min(...newArray);
console.log("Smallest Element:", minElement);

// Print the largest element of the new array to the console.
let maxElement = Math.max(...newArray);
console.log("Largest Element:", maxElement);

// Print the sum of the elements of the new array to the console.
let sum = newArray.reduce((acc, curr) => acc + curr, 0);
console.log("Total:", sum);

// Print the average of the elements of the new array to the console.
let average = sum / newArray.length;
console.log("Average:", average);
