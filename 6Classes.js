var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("jogador ".concat(this.name, " idade ").concat(this.age, " "));
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setNickname", {
        set: function (value) {
            this.nickname = value;
        },
        enumerable: false,
        configurable: true
    });
    CharAccount.prototype.logCharDetails = function () {
        console.log("o jogador ".concat(this.nickname, " tem level ").concat(this.level, " idade ").concat(this.age));
    };
    return CharAccount;
}(UserAccount));
var will = new UserAccount("will", 30);
console.log("will", will);
// console.log("age", will.age); não permite pq age é protegida
will.logDetails();
var john = new CharAccount("john", 25, "jonhtravolta", 5);
console.log("john", john);
john.logDetails();
john.logCharDetails();
// console.log("john.nickname ", john.nickname ); não pode ser acessado 
console.log("john.level ", john.level); // pode ser apenas lida
console.log(john.getLevel);
console.log(john.setNickname = 'lucas2020');
