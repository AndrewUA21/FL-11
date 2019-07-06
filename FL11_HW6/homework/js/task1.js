let pointAX= Number(window.prompt('Please enter the value for point A on the X axis', '2'));
let pointAY= Number(window.prompt('Please enter the value for point A on the Y axis', '2'));
let pointBX= Number(window.prompt('Please enter the value for point B on the X axis', '4'));
let pointBY= Number(window.prompt('Please enter the value for point B on the Y axis', '4'));
let pointCX= Number(window.prompt('Please enter the value for point C on the X axis', '3'));
let pointCY= Number(window.prompt('Please enter the value for point C on the Y axis', '3'));
let two = 2;
let result = (pointAX + pointBX)/two===pointCX && (pointAY + pointBY)/two===pointCY;
console.log(result);

