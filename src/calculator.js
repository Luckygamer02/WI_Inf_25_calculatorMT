function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
if (b === 0) throw new Error('DivideByZeroException');
return a / b;
}
function fac(n) {
    if (n < 0) throw new Error('Negative numbers not allowed');
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
module.exports = { add, sub, mul, div, fac};