"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`jogador ${this.name} idade ${this.age} `);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        return this.level;
    }
    set setNickname(value) {
        this.nickname = value;
    }
    logCharDetails() {
        console.log(`o jogador ${this.nickname} tem level ${this.level} idade ${this.age}`);
    }
}
const will = new UserAccount("will", 30);
console.log("will", will);
// console.log("age", will.age); não permite pq age é protegida
will.logDetails();
const john = new CharAccount("john", 25, "jonhtravolta", 5);
console.log("john", john);
john.logDetails();
john.logCharDetails();
// console.log("john.nickname ", john.nickname ); não pode ser acessado 
console.log("john.level ", john.level); // pode ser apenas lida
console.log(john.getLevel);
console.log(john.setNickname = 'lucas2020');
