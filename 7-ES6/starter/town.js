class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, noOfTrees, parkArea) {
        super(name, buildYear);
        this.noOfTrees = noOfTrees;
        this.parkArea = parkArea;
    }

    treeDensity = () => this.noOfTrees / this.parkArea;
    calculateAge = () => new Date().getFullYear() - this.buildYear;
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    test = () => console.log(`The name of this street is ${this.name}`);
    classification() {
        let classificationOfStreet = new Map();
        classificationOfStreet.set(1, 'tiny');
        classificationOfStreet.set(2, 'small');
        classificationOfStreet.set(3, 'normal');
        classificationOfStreet.set(4, 'big');
        classificationOfStreet.set(5, 'huge');
        console.log(`${this.name} is ${this.length} long and is classed as being a ${classificationOfStreet.get(this.size)} street`);
    }
}

// const park1 = new Park('Astro', 1998, 500, 1000);
// const park2 = new Park('Zafira', 2002, 400, 700);
// const park3 = new Park('Jofra', 2019, 1200, 200);

// const street1 = new Street('King St', 1990, 100);
// const street2 = new Street('Queen St', 1980, 50);
// const street3 = new Street('Market St', 1960, 200);
// const street4 = new Street('New St', 2005, 500);

const park1 = new Park('Green Park', 1987, 215, 0.2);
const park2 = new Park('National Park', 1894, 3541, 2.9);
const park3 = new Park('Oak Park', 1953, 949, 0.4);

const street1 = new Street('Ocean Avenue', 1999, 1.1, 4);
const street2 = new Street('Evergreen Street', 2008, 2.7, 2);
const street3 = new Street('4th Street', 2015, 0.8);
const street4 = new Street('Sunset Boulevard', 1982, 2.5, 5);

const town = new Map();
town.set(1, park1);
town.set(2, park2);
town.set(3, park3);
town.set('King', street1);
town.set('Queen', street2);
town.set('Market', street3);
town.set('New', street4);

let calculateAverageAgeOfTownsParks = () => {
    var totalParkAge = 0;
    var noOfParks = 0;
    for (let [key, value] of town) {
        if (typeof (key) === 'number') {
            noOfParks++;
            totalParkAge += value.calculateAge();
        }
    }
    return totalParkAge / noOfParks;
}

let highestNoOfTrees = () => {
    let arrTrees = [];
    for (let [key, value] of town) {
        if (typeof (key) === 'number') {
            arrTrees.push(parseInt(value.noOfTrees));
        }
    }
    let highestIndex = arrTrees.indexOf(Math.max(...arrTrees));
    let highestValue = arrTrees[highestIndex];
    let name = '';
    for (let [key, value] of town) {
        if (typeof (key) === 'number' && value.noOfTrees === highestValue) {
            name = value.name;
        }
    }
    return name;
}

let totalStreetLength = () => {
    let total = 0;
    for (let [key, value] of town) {
        if (typeof (key) === 'string') {
            total += value.length;
        }
    }
    return total;
}

let averageStreetLength = () => {
    let noOfStreets = 0;
    for (let [key, value] of town) {
        if (typeof (key) === 'string') {
            noOfStreets++;
        }
    }
    return totalStreetLength() / noOfStreets;
}

let getStreetArr = () => {
    let arr = [];
    for (let [key, value] of town) {
        if (typeof (key) === 'string') {
            arr.push(value);
        }
    }
    return arr;
}

function calc(s) {
    console.log(s);
    let total = s.reduce((prev, cur) => prev + cur, 0);
    return [total, total / s.length];
}

function pp(s) {
    console.log(s);
}

const streetArr = getStreetArr();
const [totalLength, averageLength] = calc(streetArr.map(el => el.length));
console.log(`${totalLength} and ${averageLength}`);

console.log(`In park 1 the tree density is ${park1.treeDensity()}`);
console.log(`The average age of the parks in this town is ${calculateAverageAgeOfTownsParks()}`);
console.log(`The park with the higest number of trees is ${highestNoOfTrees()}`);
console.log(`There are ${streetArr.length} number of streets`);
const a = streetArr.map(el => el.test());
const b = streetArr.map(el => el.classification());

console.log(`The total length of all the streets in this town is ${totalStreetLength()}`);
console.log(`The average length of streets is ${averageStreetLength()}`);