class Fighter{
    constructor(data){
        this.fighter = data;
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
}
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});

let name = myFighter.getName();
console.log(name); // John

let damage = myFighter.getDamage();
console.log(damage); // 20

let agility = myFighter.getAgility();
console.log(agility); // 25

let health = myFighter.getHealth();
console.log(health); // 100