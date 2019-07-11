function getMin() {
    let argsFirst = arguments[0];
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] < argsFirst){
            argsFirst = arguments[i];
        }
    }
}
getMin(3, 0, -3);