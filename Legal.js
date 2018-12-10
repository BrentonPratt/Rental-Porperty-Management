"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Agreement = /** @class */ (function () {
    function Agreement(contract) {
        this.contract = contract;
        this.archived = false;
    }
    Agreement.prototype.signByThirdParty = function (signature) {
        this.contract.thirdPartySignature = signature;
    };
    Agreement.prototype.signByUs = function (signature) {
        this.contract.ourSignature = signature;
    };
    Agreement.prototype.archive = function () {
        this.archived = true;
    };
    return Agreement;
}());
exports.Agreement = Agreement;
//# sourceMappingURL=Legal.js.map