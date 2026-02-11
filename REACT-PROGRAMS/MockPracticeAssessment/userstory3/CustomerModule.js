var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator
function Logger(target) {
    console.log("Customer Service Loaded");
}
// Enum
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["Regular"] = 0] = "Regular";
    CustomerType[CustomerType["Premium"] = 1] = "Premium";
})(CustomerType || (CustomerType = {}));
// Class with Decorator
var CustomerService = /** @class */ (function () {
    function CustomerService() {
        this.customers = [];
    }
    CustomerService.prototype.addCustomer = function (customer) {
        this.customers.push(customer);
    };
    CustomerService.prototype.getCustomers = function () {
        return this.customers;
    };
    CustomerService = __decorate([
        Logger
    ], CustomerService);
    return CustomerService;
}());
// Object creation
var service = new CustomerService();
service.addCustomer({ id: 1, name: "Bhaskar" });
service.addCustomer({ id: 2, name: "Ravi" });
console.log(service.getCustomers());
