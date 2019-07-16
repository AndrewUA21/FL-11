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
mapArray([2, 5, 8], function(el) { return el + 3 });

function filterArray(data,func) {
    let filterArr = [];
    executeforEach(data, function(args){
        if (func(args)) {
            filterArr.push(args);
        }
    });
    return filterArr;
}
filterArray([2, 5, 8], function(el) { return el > 3 });

function showFormattedDate(date){
let year = date.getFullYear();
let day = date.getDate();
let month = date.getMonth();
    switch (month) {
        case 0:
            month = 'Jan';
            break;
        case 1:
            month = 'Feb';
            break;
        case 2:
            month = 'Mar';
            break;
        case 3:
            month = 'Apr';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'Jun';
            break;
        case 6:
            month = 'Jul';
            break;
        case 7:
            month = 'Aug';
            break;
        case 8:
            month = 'Sep';
            break;
        case 9:
            month = 'Oct';
            break;
        case 10:
            month = 'Nov';
            break;
        case 11:
            month = 'Dec';
            break;
        default:
            console.log( 'I don`t know' );
    }
   return console.log('Date:'+' '+ month+' '+day+' '+year);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function canConvertToDate(date){
    let correctDate= new Date(date);
    return console.log(!isNaN(Date.parse(correctDate)));
}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00');

function daysBetween(date1,date2){
    let firstDate = date1;
    console.log(firstDate);
    let secondDate = date2;
    console.log(secondDate);
    let result = Math.round((secondDate - firstDate)/86400000);
    return result;
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))  // 32
//8

//9

//10