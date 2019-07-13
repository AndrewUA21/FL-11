function addOne(x) {
    return x + 1;
}
let pipe = function (num) {
    console.log(arguments);
    let x = num;
    console.log(x);
}


pipe(1,addOne);
