"use strict";
function voting(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let value1 = voting({
    firstName: "samrat",
    lastName: "Doe",
    age: 30
});
console.log(value1);
