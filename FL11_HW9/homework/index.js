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
findTypes(null, 5, 'hello');

function executeforEach(data, func){
    for(let i = 0; i<data.length; i++){
        func(data[i]);
    }
}
executeforEach([1,2,3], function(el) {
    console.log(el)
});

function mapArray(data,func){
let arr = [];
    executeforEach(data, function(el) {
        arr.push(func(el));
    });
    return arr;
}
mapArray([2, 5, 8], function(el) {
    return el + 3
});

function filterArray(data,func){
    let filterArr = [];
    executeforEach(data, function(args){
        if (func(args)) {
            filterArr.push(args);
        }
    });
    return filterArr;
}
filterArray([2, 5, 8], function(el) {
    return el > 3
    });

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
            console.log('I don`t know');
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
    let millisecondsPerDay = 86400000;
    let firstDate = date1;
    let secondDate = date2;
    let result = Math.round((secondDate - firstDate)/millisecondsPerDay);
    return result;
}
daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'));

let peopleParam = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];
function getAmountOfAdultPeople(data){
    let adultAge = 6574;
        return filterArray(data, function (el) {
        return daysBetween(new Date(el[' birthday ']), new Date()) > adultAge
    }).length
}
getAmountOfAdultPeople(peopleParam);

function keys(data){
     let arrKeys = [];
    for (let prop in data) {
        arrKeys.push(prop);
    }
    return arrKeys;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

function values(data){
    let arrResult = [];
    for (let prop in data) {
        arrResult.push(data[prop]);
    }
    return arrResult;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});