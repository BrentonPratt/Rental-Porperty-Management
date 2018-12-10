enum DwellingType {
    rambler,
    twoStory,
    duplex
}

abstract class Dwelling {
    address: string;
    roomCount: number;
    bathCount: number;
    squareFootage: number;
    available: boolean;
}

class House extends Dwelling {
    dwellingType: DwellingType;
}

export {DwellingType, Dwelling, House}