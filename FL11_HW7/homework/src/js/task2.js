let maxPoint = 8;
let attempt = 3;
let hello = confirm('Do you want to play a game?');
let possibleprize = 100;
let totalPrize = 0;
const increaseMaxPoint = 4;
const increasePrizeList = 2;
const freeAttempt = 3;
if(hello){
    while(hello){
        let slot = Math.floor(Math.random()*maxPoint);
        let attempt = 3;
        while(attempt) {
            let numericValue = +prompt(`Choose a roulette pocket number from 0 to ${maxPoint}).
     Attempts left:  ${(attempt)}
     Total prize: ${totalPrize}$
     Possible prize on current attempt:  ${possibleprize}$`);
            if(numericValue === slot){
                if(attempt===freeAttempt){
                    totalPrize = totalPrize + possibleprize;
                }else if(attempt===increasePrizeList){
                    totalPrize = totalPrize + possibleprize/increasePrizeList;
                }else{
                    totalPrize = totalPrize + possibleprize/increaseMaxPoint;
                }
                attempt--;
                alert(`Congratulation, you won!   Your prize is:  ${(totalPrize)} $`);
                break;
            } else if(attempt===0){
                alert(`Thank you for your participation. Your prize is: ${(totalPrize)} $`);
                break;
            }else {
                attempt--;
            }
        }
        hello = confirm('Do you want to play again?');
        if(!hello){
            alert(`Thank you for your participation. Your prize is: ${(totalPrize)} $`);
        }
        maxPoint = maxPoint + increaseMaxPoint;
        possibleprize = possibleprize * increasePrizeList;
    }
} else {
    alert('You did not become a billionaire, but can.');
}

