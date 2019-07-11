function getMin() {
    let argsMint = arguments[0];
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] < argsMint){
            argsMint = arguments[i];
        }
    }
    return argsMint;
}
getMin(3, 0, -3);