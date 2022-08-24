class UserAccount {
  public name: string; // já é o implicito, pode ler e ser alterado dentro e fora da classe
  protected age: number; // quando consegue chamada dentro da classe, ou classe extendida, mas nao pode ser chamada fora

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`jogador ${this.name} idade ${this.age} `);
  }
}

class CharAccount extends UserAccount {
  private nickname: string; //não permite ser alterada e nem lida externamente 
  readonly level: number; //não permite ser alterada externamente nem internamente

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel(){
    return this.level
  }

  set setNickname(value: string){
    this.nickname = value
  }

  logCharDetails(): void {
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

console.log("john.level ", john.level ); // pode ser apenas lida


console.log(john.getLevel)

console.log(john.setNickname = 'lucas2020')