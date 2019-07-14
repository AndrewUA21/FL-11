function formatTime(data){
    let minutes = data % 60;
    let hours = Math.floor(data / 60);
    let days = Math.floor(hours / 24);
    hours =hours %24;
    console.log(days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)');
}
formatTime(120);
formatTime(59);
formatTime(3601);