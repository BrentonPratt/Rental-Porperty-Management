import * as _ from './node_modules/lodash';
import {Agreement, Rental, Service, Contract} from "./Legal";
import {Dwelling, DwellingType, House} from "./dwellings";
import{Human, Renter, PropertyManager, Owner, Property} from "./people";

const service = new Agreement<Service>({
    propertyAddress: "123 Test St",
    contractText: "Lorem ipsum...",
    provider: "AC Provider"
});
const rental = new Agreement<Rental>({
    propertyAddress: "123 Test St",
    contractText: "Lorem ipsum...",
    renter: "Renter Renter"
});

let houses: Array<House> = [
    {address : '123 main st, denver co 87695',
        roomCount: 3,
        bathCount: 3,
        squareFootage: 2300,
        available: false,
        dwellingType: DwellingType.rambler
    },
    {address : '1010 binary dr, denver co 87695',
        roomCount: 3,
        bathCount: 3,
        squareFootage: 2800,
        available: true,
        dwellingType: DwellingType.duplex
    },
    {address : '3456 mountain view ln, denver co 87695',
        roomCount: 3,
        bathCount: 2,
        squareFootage: 1900,
        available: true,
        dwellingType: DwellingType.twoStory
    },
];

function getAllHouses(): Array<House> {
    return houses;
}

function logFirstAvailable() {
    let availableHouses: Array<House> = houses.filter(house => house.available);
    console.log(availableHouses[0], availableHouses.length, availableHouses[0].address)
}

function getHouseAddressesByDwellingType(dwellingType: DwellingType): Array<string> {
    return houses
        .filter((house: House) => house.dwellingType == dwellingType)
        .map((house: House) => house.address);
}

