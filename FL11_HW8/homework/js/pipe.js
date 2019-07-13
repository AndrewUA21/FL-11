function addOne(x) {
    return x + 1;
}
let pipe = function (number,...funct) {
    let num = number;
    for(let i = 0; i<funct.length; i++){
      num = funct[i](num);
    }
    console.log(num);
    return num;
};
pipe(1,addOne);
pipe(1,addOne,addOne);