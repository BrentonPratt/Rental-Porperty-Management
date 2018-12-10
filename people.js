"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
exports.Human = Human;
var Property = /** @class */ (function () {
    function Property() {
    }
    return Property;
}());
exports.Property = Property;
var Owner = /** @class */ (function (_super) {
    __extends(Owner, _super);
    function Owner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Owner;
}(Human));
exports.Owner = Owner;
var PropertyManager = /** @class */ (function (_super) {
    __extends(PropertyManager, _super);
    function PropertyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PropertyManager;
}(Human));
exports.PropertyManager = PropertyManager;
var Renter = /** @class */ (function (_super) {
    __extends(Renter, _super);
    function Renter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Renter;
}(Human));
exports.Renter = Renter;
//# sourceMappingURL=people.js.map