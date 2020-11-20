// 4) Реализовать функцию calculate
// calculate(3).add(2).multiply(2).result() // 10

function calculate(x1) {
    return {
        add: function (x2) {
            return {
                multiply: function (x3) {
                    return {
                        result: function () {
                            return (x1 + x2) * x3;
                        }
                    }
                }
            }
        }
    }
}

calculate(3).add(2).multiply(2).result();
