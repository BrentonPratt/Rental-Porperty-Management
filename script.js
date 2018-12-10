"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Legal_1 = require("./Legal");
var dwellings_1 = require("./dwellings");
var service = new Legal_1.Agreement({
    propertyAddress: "123 Test St",
    contractText: "Lorem ipsum...",
    provider: "AC Provider"
});
var rental = new Legal_1.Agreement({
    propertyAddress: "123 Test St",
    contractText: "Lorem ipsum...",
    renter: "Renter Renter"
});
var houses = [
    { address: '123 main st, denver co 87695',
        roomCount: 3,
        bathCount: 3,
        squareFootage: 2300,
        available: false,
        dwellingType: dwellings_1.DwellingType.rambler
    },
    { address: '1010 binary dr, denver co 87695',
        roomCount: 3,
        bathCount: 3,
        squareFootage: 2800,
        available: true,
        dwellingType: dwellings_1.DwellingType.duplex
    },
    { address: '3456 mountain view ln, denver co 87695',
        roomCount: 3,
        bathCount: 2,
        squareFootage: 1900,
        available: true,
        dwellingType: dwellings_1.DwellingType.twoStory
    },
];
function getAllHouses() {
    return houses;
}
function logFirstAvailable() {
    var availableHouses = houses.filter(function (house) { return house.available; });
    console.log(availableHouses[0], availableHouses.length, availableHouses[0].address);
}
function getHouseAddressesByDwellingType(dwellingType) {
    return houses
        .filter(function (house) { return house.dwellingType == dwellingType; })
        .map(function (house) { return house.address; });
}
//# sourceMappingURL=script.js.map