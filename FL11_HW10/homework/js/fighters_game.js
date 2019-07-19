class Fighter{
    constructor(data){
        this.fighter = data;
        this.win = 0;
        this.loss = 0;
    }
    getName(){
        return this.fighter.name;
    }
    getDamage(){
        return this.fighter.damage;
    }
    getHealth(){
        return this.fighter.hp;
    }
    getAgility(){
        return this.fighter.agility;
    }
    attack(guard){
      let probabilityAttack = 100-this.fighter.agility;
      console.log(probabilityAttack);
      let successfulAttack = Math.round(Math.random() * probabilityAttack);
      console.log(successfulAttack);
      if(successfulAttack < probabilityAttack){
          console.log(this.fighter.name + ' attack missed');
      }else{
          guard.dealDamage(this.fighter.damage);
          console.log(this.fighter.name + ' make ' + this.fighter.damage + ' damage to ' + guard.name);
      }
    }
    logCombatHistory () {
       return console.log('Name: ' + this.fighter.name + ', Wins: ' + this.win + ', Losses: ' + this.loss);
    }
    heal(heal){
        let dataHeal = heal;
        if(this.fighter.hp + heal > 100){
            console.log(this.fighter.hp = 100);
            return this.fighter.hp = 100;

        }else{
            console.log(this.fighter.hp += heal);
            return this.fighter.hp += heal;
        }
    }
    dealDamage(deal){
        console.log(this.fighter.hp - deal);
       return this.fighter.hp - deal;
    }
    addWin(){
        this.win++;
        console.log(this.win);
    }
    addLoss(){
        this.loss++;
        console.log(this.loss);
    }
}
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 25, hp: 100, agility: 15});



let name = myFighter.getName();
console.log(name); // John

let damage = myFighter.getDamage();
console.log(damage); // 20

let agility = myFighter.getAgility();
console.log(agility); // 25

let health = myFighter.getHealth();
console.log(health); // 100

myFighter.addWin();
myFighter.addLoss();
myFighter.logCombatHistory ();
myFighter2.logCombatHistory ();

myFighter2.heal(10);
myFighter.dealDamage (20);