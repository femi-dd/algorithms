const { performance } = require("perf_hooks");

let BubbleSort = arr => {
  console.log("Bubble Sort Algorithm");
  let swaped = false;

  do {
    console.log(arr);
    swaped = false;
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] > arr[x + 1]) {
        let temp = arr[x];
        arr[x] = arr[x + 1];
        arr[x + 1] = temp;
        swaped = true;
      }
    }
  } while (swaped == true);
};

const arr = [3, 2, 1, 6, 5, 79, 9];

let t0 = performance.now();
BubbleSort(arr);
let t1 = performance.now();

console.debug(`Time taken to complete program ${  t1 - t0}`);