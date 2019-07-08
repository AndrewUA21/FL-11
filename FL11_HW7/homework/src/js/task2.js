let maxPoint = 8;
let attempt = 3;
let hello = confirm('Do you want to play a game?');
let possibleprize = 100;
let totalPrize = 0;
let prizeList ={
    3: 100,
    2: 50,
    1: 25
};
const increaseMaxPoint = 4;
const increasePrizeList = 2;

let i = 0;
if(hello){
    while(hello){
        let slot = Math.floor(Math.random()*maxPoint);
        console.log(slot);
        let attempt = 3;
        while(attempt) {
            let numericValue = +prompt(`Choose a roulette pocket number from 0 to ${maxPoint}).
     Attempts left:  ${(attempt)}
     Total prize: ${totalPrize}$
     Possible prize on current attempt:  ${possibleprize}$`);
            if(numericValue === slot){
                totalPrize = totalPrize + prizeList[attempt];
                attempt--;
                alert(`Congratulation, you won!   Your prize is:  ${(totalPrize)} $`);
                console.log(totalPrize);
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
        prizeList = prizeList * increasePrizeList;
        console.log(prizeList);

    }
} else {
    alert('You did not become a billionaire, but can.');
}

