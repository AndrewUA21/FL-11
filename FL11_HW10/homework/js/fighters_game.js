class Fighter {
    constructor(data) {
        this.fighter = data;
        this.hp = data.hp;
        this.name = data.name;
        this.damage = data.damage;
        this.agility = data.agility;
        this.win = 0;
        this.loss = 0;
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

    logCombatHistory() {
        return console.log('Name: ' + this.name + ', Wins: ' + this.win + ', Losses: ' + this.loss);
    }

    heal(heal) {
        if (this.hp + heal > 100) {
             this.hp = 100;
        } else {
             this.hp += heal;
        }
    }
    dealDamage(deal) {
        if (this.hp > deal) {
            this.hp = 0;
        } else {
            this.hp -= deal;
        }
    }
    addWin() {
        this.win++;
    }
    addLoss() {
        this.win++;
    }
}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 40, hp: 100, agility: 15});

function battle(Fighter1, Fighter2) {
    if (Fighter1.hp === 0) {
        console.log(Fighter1.name + ' dead ');
    } else if (Fighter2.hp === 0) {
        console.log(Fighter2.name + ' dead ');
    } else {
        while (Fighter1.hp > 0 && Fighter2.hp > 0) {
            Fighter1.attack(Fighter2);
            Fighter2.attack(Fighter1);
        }
        if (Fighter1.hp > Fighter2.hp) {
            Fighter1.addWin();
            Fighter2.addLoss();
        } else {
            Fighter1.addLoss();
            Fighter2.addWin();
        }
    }
}

battle(myFighter, myFighter2);
myFighter.logCombatHistory();
myFighter.heal(50);