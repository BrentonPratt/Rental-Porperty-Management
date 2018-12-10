abstract class Human {
    name: string;
    email: string;
    phone: string;
    DOB: Date;
}

class Property {
    address: string;
}

class Owner extends Human {
    ownedProperties: Property[];
}

class PropertyManager extends Human {
    managedProperties: Property[];
}

class Renter extends Human {
    rentedProperties: Property;
}

export {Human, Property, Owner, PropertyManager, Renter}