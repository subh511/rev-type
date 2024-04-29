"use strict";
function maxValue(arr) {
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            value = arr[i];
        }
    }
    return value;
}
console.log(maxValue([1, 2, 3]));
