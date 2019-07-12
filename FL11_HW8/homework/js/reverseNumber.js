function reverseNumber(a) {
    let whole = Math.abs(a);
    let data = whole + '';
    let b = '';
    for (let i = data.length - 1; i >= 0; i--) {
       b = b + data[i];
    }
    let result =Math.sign(a) * b;
    return result;
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);