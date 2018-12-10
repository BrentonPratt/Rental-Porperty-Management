class Agreement<T extends Contract> {
    archived = false;
    constructor(public contract: T) {}
    signByThirdParty(signature: string) {
        this.contract.thirdPartySignature = signature;
    }
    signByUs(signature: string) {
        this.contract.ourSignature = signature;
    }
    archive() {
        this.archived = true;
    }
}
interface Contract {
    propertyAddress: string;
    contractText: string;
    ourSignature?: string;
    thirdPartySignature?: string;
}
interface Service extends Contract{
    provider: string;
}
interface Rental extends Contract {
    renter: string;
}

export {Agreement, Contract, Service, Rental}