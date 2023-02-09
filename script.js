"use strict";

let counter = [0];

function countArray() {
  counter.unshift(counter[0] + 1);
  console.log(counter);
  if (counter.length > 8) {
    counter.pop();
  }
  setTimeout(countArray, 1000);
}

countArray();
