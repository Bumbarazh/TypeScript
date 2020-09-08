// Клас людина:
//     поля:
//         вага,зріст
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)
// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції
//
// в майні зробити через switch меню
//     1 - Верховна рада
//         2 - Фракція
//         3 - Депутат
//         відповідно при вводі з клави певної цифри ми попадаєио в інше меню
//         якщо ми нажали 1 то нам промалюється в консолі таке меню
//         1-додати фракцію
//         2-вивести всі фракції
//         3-вивести найбільшого хабарника
//         меню робимо на свій смак
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Клас людина:
//     поля:
//         вага,зріст
var Human = /** @class */ (function () {
    function Human(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Human;
}());
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
var deputat = /** @class */ (function (_super) {
    __extends(deputat, _super);
    function deputat(height, weight, name, surname, age, habarnyk, sizeOfHabar) {
        if (height === void 0) { height = 1.9; }
        if (weight === void 0) { weight = 100; }
        var _this = _super.call(this, height, weight) || this;
        _this.height = height;
        _this.weight = weight;
        _this.name = name;
        _this.surname = surname;
        _this.age = age;
        _this.habarnyk = habarnyk;
        _this.sizeOfHabar = sizeOfHabar;
        return _this;
    }
    //     дати хабаря(зробити відповідні перевірки...
    // якщо депутат не хабарник то щоб він відмовився,
    //     або ж якщо сума хабаря надто велика то щоб він вагався
    // чи брати чи ні)
    deputat.prototype.giveHabar = function (isHabarnyk, habarSize) {
        if (isHabarnyk && habarSize <= 1000000) {
            return this.sizeOfHabar += habarSize;
        }
        if (!isHabarnyk) {
            alert('I am not corruptioner!');
        }
        if (isHabarnyk && habarSize > 1000000) {
            var monetka = Math.floor(Math.random() * 10);
            if (monetka >= 5) {
                return this.sizeOfHabar += habarSize;
            }
            alert('I can\'t take it. It is too much for me!');
            return;
        }
    };
    return deputat;
}(Human));
// Клас фракція
// поля:
//     список депутатів
var Fraction = /** @class */ (function () {
    function Fraction(lisOfDeputats) {
        this.listOfDeputats = lisOfDeputats;
    }
    // додати депутата (вводимо з клави)
    // видалити депутата(теж з клави)
    // видалити всіх негідників які брали хабаря
    // вивести найбільшого хабарника
    // вивести всіх депутатів
    // видалити всіх депутатів
    // вивести загальну суму хабарів для фракції
    Fraction.prototype.addDeputat = function (height, weight, name, surname, age, habarnyk, sizeOfHabar) {
        this.listOfDeputats.push(new deputat(height, weight, name, surname, age, habarnyk, sizeOfHabar));
    };
    // видалити депутата(теж з клави)
    Fraction.prototype.deleteDeputat = function (deputat) {
        return this.listOfDeputats = this.listOfDeputats.filter(function (value) { return value.name !== deputat.name; });
    };
    // видалити всіх негідників які брали хабаря
    Fraction.prototype.deleteAllBribers = function () {
        return this.listOfDeputats = this.listOfDeputats.filter(function (value) { return value.sizeOfHabar === 0; });
    };
    // вивести найбільшого хабарника
    Fraction.prototype.mostBriberInFraction = function () {
        this.listOfDeputats.reduce(function (previousValue, curr) {
            if (previousValue < curr.sizeOfHabar) {
                return curr;
            }
            return previousValue;
        }, 0);
    };
    // вивести всіх депутатів
    Fraction.prototype.allDeputy = function () {
        this.listOfDeputats.forEach(function (value) {
            console.log("Name: " + value.name + " Surname: " + value.surname);
            return;
        });
    };
    // видалити всіх депутатів
    Fraction.prototype.deleteAllDeputy = function () {
        return this.listOfDeputats.length = 0;
    };
    // вивести загальну суму хабарів для фракції
    Fraction.prototype.generalSumOfBribes = function () {
        this.listOfDeputats.reduce(function (acc, currValue) {
            return acc + currValue.sizeOfHabar;
        }, 0);
    };
    return Fraction;
}());
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
var verhovnaRada = /** @class */ (function () {
    function verhovnaRada(fraction) {
        this.fractionMap = fraction;
    }
    //     додати\видалити фракцію
    verhovnaRada.prototype.deleteFraction = function (item) {
        this.fractionMap = this.fractionMap.filter(function (value) {
            return item != value;
        });
    };
    // додати фракцію
    verhovnaRada.prototype.addFraction = function (listOfDeputats) {
        this.fractionMap.push(new Fraction(listOfDeputats));
        return;
    };
    // вивести всі фракції
    verhovnaRada.prototype.viewAllFractions = function () {
        var str = '';
        return str = this.fractionMap.join(', ');
    };
    // вивести конкретну фракцію
    verhovnaRada.prototype.viewOneFraction = function (item) {
        this.fractionMap.filter(function (value) {
            return item === value;
        });
    };
    // додати\видалити депутата з фракції
    verhovnaRada.prototype.deleteDeputyFromFraction = function (deputy) {
        this.fractionMap.filter(function (value) {
            value.deleteDeputat(deputy);
            return;
        });
    };
    // вивести всіх хабарників фракції
    verhovnaRada.prototype.viewAllBribersOfFraction = function () {
        this.fractionMap.filter(function (fraction) {
            fraction.listOfDeputats.filter(function (deputy) {
                return deputy.sizeOfHabar !== 0;
            });
        });
    };
    // вивести найбільшого хабарника у верховної ради
    verhovnaRada.prototype.viewTheMostBriberInFraction = function () {
        this.fractionMap.filter(function (fraction) {
            fraction.mostBriberInFraction();
        });
    };
    // вивести фсіх депутатів фракції
    verhovnaRada.prototype.viewAllDeputyInFraction = function () {
        this.fractionMap.forEach(function (fraction) {
            fraction.allDeputy();
        });
    };
    return verhovnaRada;
}());
