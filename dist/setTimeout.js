"use strict";
function finalOutput(delayedOutput) {
    setTimeout(delayedOutput, 3000);
}
finalOutput(function () {
    console.log("hello world");
});
