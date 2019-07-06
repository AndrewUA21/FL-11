let a= Number(window.prompt('Please enter side a for the triangle', '2'));
let b= Number(window.prompt('Please enter side b for the triangle', '2'));
let c= Number(window.prompt('Please enter side c for the triangle', '2'));
if(a<=b+c && b<=a+c && c<=a+b){
    if(a===b && b===c && a===c){
        console.log('Equivalent triangle');
    }else if (a===b || b===c || a===c){
        console.log('Isosceles triangle');
    }else {
        console.log('Normal triangle');
    }
}else {
    console.log('Triangle doesn’t exist');
}