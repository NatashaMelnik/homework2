function sum(x) {
    return function recurs(y) {
        if (y) {
            x = y + x;
            return recurs;
        }
        else {
            return x;
        }
    }
}

console.log(sum(1)(2)(3)());
console.log(sum(1)(2)(3)(4)(5)(6)(7)());