class Fighter {
    constructor(data) {
        this.fighter = data;
        this.hp = data.hp;
        this.name = data.name;
        this.damage = data.damage;
        this.agility = data.agility;
    }

    getName() {
        return this.name;
    }

    getDamage() {
        return this.damage;
    }

    getHealth() {
        return this.hp;
    }

    getAgility() {
        return this.agility;
    }

    attack(guard) {
        let probabilityAttack = 100 - guard.agility;
        let successfulAttack = Math.round(Math.random() * probabilityAttack);
        if (successfulAttack < probabilityAttack) {
            guard.dealDamage(this.damage);
            console.log(this.name + ' make ' + this.damage + ' damage to ' + guard.name);
        } else {
            console.log(this.name + ' attack missed');
        }
    }
    dealDamage(deal) {
        this.hp -= deal;
    }
}
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 40, hp: 100, agility: 15});

function battle(Fighter1, Fighter2) {
    if(Fighter1.hp === 0){
        console.log(Fighter1.name+ ' dead ');
    }else if(Fighter2.hp === 0){
        console.log(Fighter2.name+' dead ');
    }else{
    while (Fighter1.hp > 0 && Fighter2.hp > 0) {
        Fighter1.attack(Fighter2);
        Fighter2.attack(Fighter1);
    }
    }
}

battle(myFighter, myFighter2);