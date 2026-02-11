import dispatcher from "./dispatcher";

let products = [];
let listeners = [];

const notify = () => {
  listeners.forEach((listener) => listener());
};

const ProductStore = {
  getProducts() {
    return products;
  },

  addChangeListener(listener) {
    listeners.push(listener);
  },

  removeChangeListener(listener) {
    listeners = listeners.filter((l) => l !== listener);
  },
};

// Dispatcher registration
dispatcher.register((action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      products = action.payload;
      notify();
      break;

    case "DELETE_PRODUCT":
      products = products.filter(
        (p) => p.id !== action.payload
      );
      notify();
      break;

    default:
      break;
  }
});

export default ProductStore;