function sum(f) { 
    return function (a) {
        return function (b) {
            return function(c){
                return function(){
                    return f(a, b, c);
                };
            };
        };
    };
}

function func(a, b, c) {
    return a + b + c;
}

let Sum = sum(func);

console.log(Sum(1)(2)(3)()); 
