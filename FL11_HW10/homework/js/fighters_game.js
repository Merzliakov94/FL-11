function Fighter (fighterData) {
  this.wins = 0;
  this.losses = 0;
  let maxAtack = 100;

  this.getWins = () => this.wins;
  this.getLosses = () => this.losses;
  this.getName = () => fighterData.name;
  this.getDamage = () => fighterData.damage;
  this.getAgility = () => fighterData.agility;
  this.getHealth = () => fighterData.hp;

  this.attack = function(kick) {
    let success = parseInt( Math.random()*maxAtack );
    if (success < kick.getAgility()) {
      kick.dealDamage(this.getDamage());
      console.log(+this.getName()+' make '+this.getDamage()+' damage to '+kick.getName());
    } else {
      console.log(+this.getName()+' attack missed');
    }
  }
  this.logCombatHistory = function() {
    console.log('Name:'+fighterData.name()+', Wins:' +this.wins()+', Losses:' +this.losses());
  }

  this.dealDamage = function(attackDamage) {
    fighterData.hp < attackDamage ? fighterData.hp = 0 : fighterData.hp -= attackDamage;
  }
  this.addWin = function() {
    this.wins = this.getWins() + 1 || 1;
  }

  this.addLoss = function() {
      this.losses = this.getLosses() + 1 || 1;
  }
}

let minHP = 0;

function battle (first, second) {
    console.log('Battle begin!'+first.getName()+'! VS '+second.getName()+'! \nFight!')
    while (first.getHealth() > minHP && second.getHealth() > minHP) {
        first.attack(second);
        second.attack(first);

        if (first.getHealth() === minHP & second.getHealth() > minHP) {
          first.addLoss();
          second.addWin();
          console.log(+second.getName()+' win in fight!');
          console.log(+first.getName()+' is dead and cant\'t fight.');

        } else if (second.getHealth() === minHP & first.getHealth() > minHP ){
          first.addWin();
          second.addLoss();
          console.log(+first.getName()+' win in fight!');
          console.log(+second.getName()+' is dead and cant\'t fight.');
        }
    }
}

function hpInfo (hpData) {
  return console.log('Name: '+hpData.getName()+', Heal point: ' +hpData.getHealth());
}

const Fighter1 = new Fighter({name: 'Johny', damage: 20, hp: 100, agility: 50});
const Fighter2 = new Fighter({name: 'Sam', damage: 30, hp: 100, agility: 40});

console.log(battle(Fighter1, Fighter2));
console.log(Fighter1.logCombatHistory());
console.log(Fighter2.logCombatHistory());
console.log(hpInfo(Fighter1));
console.log(hpInfo(Fighter2));