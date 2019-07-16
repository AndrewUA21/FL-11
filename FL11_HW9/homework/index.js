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

function findTypes(...data){
let result = {};
let type;
    for(let i = 0; i<data.length; i++){
        type = typeof data[i];
        if(result.hasOwnProperty(type)){
            result[type] += 1;
        }else{
            result[type] = 1;
        }
    }
    return result;
}
findTypes('number');
findTypes(null, 5, "hello");

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

function filterArray(data,func) {
    let filterArr = [];
    executeforEach(data, function(args){
        if (func(args)) {
            filterArr.push(args);
        }
    });
    console.log(filterArr);
    return filterArr;
}
filterArray([2, 5, 8], function(el) { return el > 3 });


