"use strict";

const elementGrid = document.getElementById("grid");

for (let number = 1; number <= 100; number++) {
  const box = document.createElement("li");
  box.classList.add("box");
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
    box.append("FizzBuzz");
    elementGrid.append(box);
    box.classList.add("fizzbuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
    box.append("Fizz");
    elementGrid.append(box);
    box.classList.add("fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
    box.append("Buzz");
    elementGrid.append(box);
    box.classList.add("buzz");
  } else {
    console.log(number);
    box.append(number);
    elementGrid.append(box);
  }
}
