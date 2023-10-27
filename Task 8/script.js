/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    constructor() {
        // zemiau keturi metodai, tikiuosi supratau užduoti gerai :D
    }

    sudetis(a, b) {
        return a + b;
    }

    atimtis(a, b) {
        return a - b;
    }

    daugyba(a, b) {
        return a * b;
    }

    dalyba(a, b) {
        return a / b;
    }
}

const skaiciuotuvas = new Calculator();

// console.log(skaiciuotuvas.sudetis(10, 10));  // 20
// console.log(skaiciuotuvas.atimtis(20, 10));  // 10
// console.log(skaiciuotuvas.daugyba(10, 10));  // 100
// console.log(skaiciuotuvas.dalyba(100, 10));  // 10
