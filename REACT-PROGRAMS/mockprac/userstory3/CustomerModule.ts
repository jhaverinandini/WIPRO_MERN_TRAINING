enum EventType {
  Conference,
  Concert
}

type CustomerTuple = [number, string];

function Logger(target: any) {
  console.log("Class created:", target.name);
}

interface Person {
  id: number;
  name: string;
}

@Logger
class Customer implements Person {
  constructor(
    public id: number,
    public name: string,
    public event: EventType,
    public details: CustomerTuple
  ) {}

  getInfo(): string {
    return `${this.name} registered`;
  }
}

const customer = new Customer(
  1,
  "Nandhu",
  EventType.Concert,
  [101, "VIP"]
);

console.log(customer.getInfo());
