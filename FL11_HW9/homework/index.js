function getNumbers (data){
    let arr = [];
    for(let i = 0;i<data.length; i++){
        let num = parseInt(data[i]);
        if(!isNaN(num)){
            arr.push(data[i]);
        }
   }
    return arr;
}
getNumbers('n1um3ber95');
//1


function executeforEach(data, func){
    for(let i = 0; i<data.length; i++){
        func(data[i]);
    }
}
executeforEach([1,2,3], function(el) { console.log(el) });

function mapArray(data,func){
let arr = [];
    executeforEach(data, function(el) {
        arr.push(func(el));
    });
    return arr;
}
mapArray([2, 5, 8], function(el) { return el + 3 })
//4




