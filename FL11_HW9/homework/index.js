//0
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

//2
function executeforEach(data, func){
    for(let i = 0; i<data.length; i++){
        func (data[i])
    }
}
executeforEach([1,2,3], function(el) { console.log(el) });