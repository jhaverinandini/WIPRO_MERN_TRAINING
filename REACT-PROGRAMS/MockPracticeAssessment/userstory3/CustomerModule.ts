// Decorator
function Logger(target: any) {
  console.log("Customer Service Loaded");
}

// Interface
interface Customer {
  id: number;
  name: string;
}

// Enum
enum CustomerType {
  Regular,
  Premium
}

// Class with Decorator
@Logger
class CustomerService {
  private customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}

// Object creation
const service = new CustomerService();

service.addCustomer({ id: 1, name: "Bhaskar" });
service.addCustomer({ id: 2, name: "Ravi" });

console.log(service.getCustomers());
