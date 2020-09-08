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

// Клас людина:
//     поля:
//         вага,зріст

class Human {
    weight: number;
    height: number;

    constructor(weight?: number, height?: number) {
        this.weight = weight;
        this.height = height;
    }
}

// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря

class deputat extends Human {
    name: string;
    surname: string;
    age: number;
    habarnyk: boolean;
    sizeOfHabar: number;

    constructor(height: number = 1.9, weight: number = 100, name: string, surname: string, age: number, habarnyk: boolean,
                sizeOfHabar: number) {
        super(height, weight);
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.habarnyk = habarnyk;
        this.sizeOfHabar = sizeOfHabar;
    }
    //     дати хабаря(зробити відповідні перевірки...
    // якщо депутат не хабарник то щоб він відмовився,
    //     або ж якщо сума хабаря надто велика то щоб він вагався
    // чи брати чи ні)

    giveHabar (isHabarnyk, habarSize) {
        if (isHabarnyk && habarSize <= 1000000) {
            return this.sizeOfHabar += habarSize;
        }
        if (!isHabarnyk) {
            alert('I am not corruptioner!');
        }
        if (isHabarnyk && habarSize > 1000000) {
            let monetka = Math.floor(Math.random() * 10);
            if (monetka >= 5) {
                return this.sizeOfHabar += habarSize;
            }
            alert('I can\'t take it. It is too much for me!');
            return;
        }
    }
}

// Клас фракція
// поля:
//     список депутатів

class Fraction {
    listOfDeputats: deputat[];

    constructor(lisOfDeputats: deputat[]) {
        this.listOfDeputats = lisOfDeputats;
    }

    // додати депутата (вводимо з клави)
    // видалити депутата(теж з клави)
    // видалити всіх негідників які брали хабаря
    // вивести найбільшого хабарника
    // вивести всіх депутатів
    // видалити всіх депутатів
    // вивести загальну суму хабарів для фракції

    addDeputat (height: number, weight: number, name: string, surname: string, age: number, habarnyk: boolean, sizeOfHabar: number) {
        this.listOfDeputats.push(new deputat(height, weight, name, surname, age, habarnyk, sizeOfHabar));
    }
    // видалити депутата(теж з клави)

    deleteDeputat (deputat) {
        return this.listOfDeputats = this.listOfDeputats.filter(value => value.name !== deputat.name);
    }

    // видалити всіх негідників які брали хабаря

    deleteAllBribers () {
        return this.listOfDeputats = this.listOfDeputats.filter(value => value.sizeOfHabar === 0);
    }

    // вивести найбільшого хабарника

    mostBriberInFraction () {
        this.listOfDeputats.reduce((previousValue, curr) => {
            if (previousValue < curr.sizeOfHabar) {
                return curr;
            }
            return previousValue;
        }, 0)
    }

    // вивести всіх депутатів

    allDeputy () {
        this.listOfDeputats.forEach(value => {
            console.log(`Name: ${value.name} Surname: ${value.surname}`);
            return;
        });
    }

    // видалити всіх депутатів

    deleteAllDeputy () {
        return this.listOfDeputats.length = 0;
    }

    // вивести загальну суму хабарів для фракції

    generalSumOfBribes () {
        this.listOfDeputats.reduce((acc, currValue) => {
            return acc + currValue.sizeOfHabar;
        }, 0)
    }
}

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

class verhovnaRada {

    fractionMap: Fraction[];

    constructor(fraction: Fraction[]) {
        this.fractionMap = fraction
    }

    //     додати\видалити фракцію

    deleteFraction(item) {
        this.fractionMap = this.fractionMap.filter(function (value) {
            return item != value;
        })
    }

    // додати фракцію

    addFraction(listOfDeputats: deputat[]) {
        this.fractionMap.push(new Fraction(listOfDeputats));
        return;
    }

    // вивести всі фракції

    viewAllFractions() {
        this.fractionMap.forEach(fraction => {
            fraction.listOfDeputats.forEach(deputy => {
                console.log(`Name: ${deputy.name} Surname: ${deputy.surname}`)
                return;
            })
        })
    }

    // вивести конкретну фракцію

    viewOneFraction(item) {
        this.fractionMap.filter(function (value) {
            return item === value;
        })
    }

    // додати\видалити депутата з фракції

    deleteDeputyFromFraction (deputy) {
        this.fractionMap.filter(value => {
            value.deleteDeputat(deputy);
            return;
        })
    }

    // вивести всіх хабарників фракції

    viewAllBribersOfFraction() {
        this.fractionMap.filter(fraction => {
            fraction.listOfDeputats.filter(deputy => {
                return deputy.sizeOfHabar !== 0;
            })
        })
    }

    // вивести найбільшого хабарника у верховної ради

    viewTheMostBriberInFraction() {
        this.fractionMap.filter(fraction => {
            fraction.mostBriberInFraction();
        })
    }

    // вивести фсіх депутатів фракції

    viewAllDeputyInFraction() {
        this.fractionMap.forEach(fraction => {
            fraction.allDeputy();
        });
    }

}