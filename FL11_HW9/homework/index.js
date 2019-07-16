function getNumbers (data){

    let arr = [];
    for(let i = 0;i<data.length; i++){
        let num = parseInt(data[i]);
        if(!isNaN(num)){
            arr.push(data[i]);
        }
   }
    console.log(arr);
}
getNumbers('n1um3ber95');