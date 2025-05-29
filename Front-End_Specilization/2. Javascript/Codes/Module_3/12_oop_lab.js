class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}

class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
}

function intern() {
    let internObj = new Worker("Bob", 21, 110, 0, 10);
    internObj.goToWork();
    return internObj;
}

function manager() {
    let managerObj = new Worker("Alice", 30, 120, 100, 30);
    managerObj.doSomethingFun();
    return managerObj;
}

const internInstance = intern();
console.log(internInstance.xp, internInstance.hourlyWage, internInstance.name, internInstance.age, internInstance.energy);
// Expected: 10 10 Bob 21 110

const managerInstance = manager();
console.log(managerInstance.xp, managerInstance.hourlyWage, managerInstance.name, managerInstance.age, managerInstance.energy);
// Expected: 100 30 Alice 30 110