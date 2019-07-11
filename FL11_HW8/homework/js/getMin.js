function getMin() {
    let argsMin = arguments[0];
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] < argsMin){
            argsMin = arguments[i];
        }
    }
    return argsMin;
}
getMin(3, 0, -3);